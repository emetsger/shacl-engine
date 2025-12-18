/**
 * Thin WASM API for shacl-engine
 *
 * Provides string-in/string-out interface suitable for WASM interop.
 * Accepts N-Triples format, returns JSON validation results.
 */

import dataModelFactory from '@rdfjs/data-model'
import datasetFactory from '@rdfjs/dataset'
import Validator from './Validator.js'

// Minimal N-Triples parser (synchronous, no streams)
function parseNTriples(input, factory, dataset) {
  const lines = input.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) continue

    const quad = parseNTLine(trimmed, factory)
    if (quad) dataset.add(quad)
  }

  return dataset
}

function parseNTLine(line, factory) {
  // Remove trailing " ."
  if (line.endsWith(' .')) {
    line = line.slice(0, -2).trim()
  } else if (line.endsWith('.')) {
    line = line.slice(0, -1).trim()
  }

  const terms = []
  let pos = 0

  while (pos < line.length && terms.length < 4) {
    // Skip whitespace
    while (pos < line.length && /\s/.test(line[pos])) pos++
    if (pos >= line.length) break

    const char = line[pos]

    if (char === '<') {
      // IRI
      const end = line.indexOf('>', pos)
      if (end === -1) return null
      terms.push(factory.namedNode(line.slice(pos + 1, end)))
      pos = end + 1
    } else if (char === '_') {
      // Blank node
      const match = line.slice(pos).match(/^_:([^\s]+)/)
      if (!match) return null
      terms.push(factory.blankNode(match[1]))
      pos += match[0].length
    } else if (char === '"') {
      // Literal
      const result = parseLiteral(line, pos, factory)
      if (!result) return null
      terms.push(result.term)
      pos = result.pos
    } else {
      return null
    }
  }

  if (terms.length < 3) return null

  return factory.quad(
    terms[0],
    terms[1],
    terms[2],
    terms[3] || factory.defaultGraph()
  )
}

function parseLiteral(line, pos, factory) {
  // Skip opening quote
  pos++

  let value = ''
  while (pos < line.length) {
    const char = line[pos]

    if (char === '\\' && pos + 1 < line.length) {
      // Escape sequence
      const next = line[pos + 1]
      switch (next) {
        case 'n': value += '\n'; break
        case 'r': value += '\r'; break
        case 't': value += '\t'; break
        case '\\': value += '\\'; break
        case '"': value += '"'; break
        case 'u': {
          const hex = line.slice(pos + 2, pos + 6)
          value += String.fromCharCode(parseInt(hex, 16))
          pos += 4
          break
        }
        case 'U': {
          const hex = line.slice(pos + 2, pos + 10)
          value += String.fromCodePoint(parseInt(hex, 16))
          pos += 8
          break
        }
        default: value += next
      }
      pos += 2
    } else if (char === '"') {
      pos++
      break
    } else {
      value += char
      pos++
    }
  }

  // Check for language tag or datatype
  if (pos < line.length && line[pos] === '@') {
    // Language tag
    const match = line.slice(pos).match(/^@([a-zA-Z-]+)/)
    if (match) {
      return { term: factory.literal(value, match[1]), pos: pos + match[0].length }
    }
  } else if (pos + 1 < line.length && line.slice(pos, pos + 2) === '^^') {
    // Datatype
    pos += 2
    if (line[pos] === '<') {
      const end = line.indexOf('>', pos)
      if (end !== -1) {
        const datatype = factory.namedNode(line.slice(pos + 1, end))
        return { term: factory.literal(value, datatype), pos: end + 1 }
      }
    }
  }

  return { term: factory.literal(value), pos }
}

// Convert validation report to JSON-serializable object
function reportToJson(report) {
  const results = []

  for (const result of report.results) {
    const item = {
      focusNode: termToString(result.focusNode?.term || result.focusNode),
      severity: termToString(result.severity),
      sourceConstraintComponent: termToString(result.constraintComponent),
      sourceShape: termToString(result.shape?.ptr?.term),
    }

    if (result.path && result.path.length > 0) {
      // Convert path array to string representation
      item.path = result.path.map(step => {
        const predicates = step.predicates.map(p => p.value).join('|')
        const prefix = step.start === 'object' ? '^' : ''
        const suffix = step.quantifier === 'oneOrMore' ? '+' :
                      step.quantifier === 'zeroOrMore' ? '*' :
                      step.quantifier === 'zeroOrOne' ? '?' : ''
        return prefix + predicates + suffix
      }).join('/')
    }

    if (result.value) {
      item.value = termToString(result.value?.term || result.value)
    }

    if (result.message && result.message.length > 0) {
      item.message = result.message.map(m => m.value)
    }

    results.push(item)
  }

  return {
    conforms: report.conforms,
    results
  }
}

function termToString(term) {
  if (!term) return null
  if (term.termType === 'NamedNode') return term.value
  if (term.termType === 'BlankNode') return '_:' + term.value
  if (term.termType === 'Literal') {
    if (term.language) return `"${term.value}"@${term.language}`
    if (term.datatype && term.datatype.value !== 'http://www.w3.org/2001/XMLSchema#string') {
      return `"${term.value}"^^<${term.datatype.value}>`
    }
    return `"${term.value}"`
  }
  return String(term.value)
}

/**
 * Validate RDF data against SHACL shapes
 *
 * @param {string} shapesNT - SHACL shapes in N-Triples format
 * @param {string} dataNT - Data to validate in N-Triples format
 * @returns {string} JSON string with validation results
 */
export async function validate(shapesNT, dataNT) {
  try {
    const shapesDataset = parseNTriples(shapesNT, dataModelFactory, datasetFactory.dataset())
    const dataDataset = parseNTriples(dataNT, dataModelFactory, datasetFactory.dataset())

    const validator = new Validator(shapesDataset, { factory: dataModelFactory })
    const report = await validator.validate({ dataset: dataDataset })

    return JSON.stringify(reportToJson(report))
  } catch (error) {
    return JSON.stringify({
      error: true,
      message: error.message,
      stack: error.stack
    })
  }
}

/**
 * Synchronous wrapper that returns a promise string for WASM compatibility
 */
export function validateSync(shapesNT, dataNT) {
  return validate(shapesNT, dataNT)
}

// Export for testing
export { parseNTriples, reportToJson }
