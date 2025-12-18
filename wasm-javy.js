/**
 * Javy-compatible entry point for SHACL validation
 *
 * Uses Javy.IO for stdin/stdout. Input is JSON via stdin:
 * { "shapes": "<n-triples>", "data": "<n-triples>" }
 *
 * Output is JSON validation result on stdout.
 */

import dataModelFactory from '@rdfjs/data-model'
import datasetFactory from '@rdfjs/dataset'
import Validator from './Validator.js'

// Minimal N-Triples parser (synchronous, no streams)
function parseNTriples(input, factory, dataset) {
  const lines = input.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const quad = parseNTLine(trimmed, factory)
    if (quad) dataset.add(quad)
  }

  return dataset
}

function parseNTLine(line, factory) {
  if (line.endsWith(' .')) {
    line = line.slice(0, -2).trim()
  } else if (line.endsWith('.')) {
    line = line.slice(0, -1).trim()
  }

  const terms = []
  let pos = 0

  while (pos < line.length && terms.length < 4) {
    while (pos < line.length && /\s/.test(line[pos])) pos++
    if (pos >= line.length) break

    const char = line[pos]

    if (char === '<') {
      const end = line.indexOf('>', pos)
      if (end === -1) return null
      terms.push(factory.namedNode(line.slice(pos + 1, end)))
      pos = end + 1
    } else if (char === '_') {
      const match = line.slice(pos).match(/^_:([^\s]+)/)
      if (!match) return null
      terms.push(factory.blankNode(match[1]))
      pos += match[0].length
    } else if (char === '"') {
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
  pos++
  let value = ''

  while (pos < line.length) {
    const char = line[pos]

    if (char === '\\' && pos + 1 < line.length) {
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

  if (pos < line.length && line[pos] === '@') {
    const match = line.slice(pos).match(/^@([a-zA-Z-]+)/)
    if (match) {
      return { term: factory.literal(value, match[1]), pos: pos + match[0].length }
    }
  } else if (pos + 1 < line.length && line.slice(pos, pos + 2) === '^^') {
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

  return { conforms: report.conforms, results }
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

function validate(shapes, data) {
  const shapesDataset = parseNTriples(shapes, dataModelFactory, datasetFactory.dataset())
  const dataDataset = parseNTriples(data, dataModelFactory, datasetFactory.dataset())

  const validator = new Validator(shapesDataset, { factory: dataModelFactory })

  // Note: validate() is async, but we need to handle it synchronously for WASM
  // This works because QuickJS in Javy supports top-level await
  return validator.validate({ dataset: dataDataset }).then(report => reportToJson(report))
}

// Javy I/O helpers using readSync/writeSync API
const STDIN = 0
const STDOUT = 1

function readStdin() {
  const chunks = []
  const buffer = new Uint8Array(4096)

  while (true) {
    const bytesRead = Javy.IO.readSync(STDIN, buffer)
    if (bytesRead === 0) break
    chunks.push(buffer.slice(0, bytesRead))
  }

  // Concatenate all chunks
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0)
  const result = new Uint8Array(totalLength)
  let offset = 0
  for (const chunk of chunks) {
    result.set(chunk, offset)
    offset += chunk.length
  }

  return new TextDecoder().decode(result)
}

function writeStdout(str) {
  const bytes = new TextEncoder().encode(str)
  Javy.IO.writeSync(STDOUT, bytes)
}

// Main entry point
async function main() {
  try {
    const inputStr = readStdin()

    if (!inputStr) {
      writeStdout(JSON.stringify({ error: true, message: 'No input provided' }))
      return
    }

    const input = JSON.parse(inputStr)

    if (!input.shapes || !input.data) {
      writeStdout(JSON.stringify({ error: true, message: 'Input must have "shapes" and "data" fields' }))
      return
    }

    const result = await validate(input.shapes, input.data)
    writeStdout(JSON.stringify(result))
  } catch (error) {
    writeStdout(JSON.stringify({
      error: true,
      message: error.message,
      stack: error.stack
    }))
  }
}

main()
