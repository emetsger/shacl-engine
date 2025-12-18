import { validate } from './wasm-api.min.js'

// Simple SHACL shape: Person must have exactly one name
const shapes = `
<http://example.org/PersonShape> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/shacl#NodeShape> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#targetClass> <http://example.org/Person> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#property> <http://example.org/PersonShape-name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#path> <http://example.org/name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#minCount> "1"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#maxCount> "1"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#datatype> <http://www.w3.org/2001/XMLSchema#string> .
`

// Valid data: Person with exactly one name
const validData = `
<http://example.org/alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
<http://example.org/alice> <http://example.org/name> "Alice" .
`

// Invalid data: Person with no name
const invalidData = `
<http://example.org/bob> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
`

async function test() {
  console.log('Testing WASM API...\n')

  console.log('=== Test 1: Valid data ===')
  const result1 = await validate(shapes, validData)
  const parsed1 = JSON.parse(result1)
  console.log('Conforms:', parsed1.conforms)
  console.log('Results:', parsed1.results.length)
  console.log()

  console.log('=== Test 2: Invalid data (missing name) ===')
  const result2 = await validate(shapes, invalidData)
  const parsed2 = JSON.parse(result2)
  console.log('Conforms:', parsed2.conforms)
  console.log('Results:', parsed2.results.length)
  if (parsed2.results.length > 0) {
    console.log('Violation:', JSON.stringify(parsed2.results[0], null, 2))
  }
  console.log()

  console.log('=== Summary ===')
  console.log('Valid data conforms:', parsed1.conforms === true ? 'PASS' : 'FAIL')
  console.log('Invalid data fails:', parsed2.conforms === false ? 'PASS' : 'FAIL')
}

test().catch(console.error)
