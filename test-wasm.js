import { readFile } from 'fs/promises'
import { WASI } from 'wasi'

const shapes = `
<http://example.org/PersonShape> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/shacl#NodeShape> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#targetClass> <http://example.org/Person> .
<http://example.org/PersonShape> <http://www.w3.org/ns/shacl#property> <http://example.org/PersonShape-name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#path> <http://example.org/name> .
<http://example.org/PersonShape-name> <http://www.w3.org/ns/shacl#minCount> "1"^^<http://www.w3.org/2001/XMLSchema#integer> .
`

const invalidData = `
<http://example.org/bob> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/Person> .
`

async function main() {
  const wasmBuffer = await readFile('./shacl-engine.wasm')

  // Prepare input
  const input = JSON.stringify({ shapes, data: invalidData })
  const inputBytes = new TextEncoder().encode(input)

  // Create buffers for Javy IO
  let outputBytes = new Uint8Array()

  const wasi = new WASI({
    version: 'preview1',
    args: [],
    env: {},
  })

  const module = await WebAssembly.compile(wasmBuffer)

  // Javy uses custom imports for IO
  const imports = {
    ...wasi.getImportObject(),
    'javy_quickjs_provider_v3': {
      'canonical_abi_realloc': (ptr, oldSize, align, newSize) => {
        // Simple realloc implementation
        return ptr
      },
      'javy.invoke': () => {},
    }
  }

  try {
    const instance = await WebAssembly.instantiate(module, imports)
    wasi.start(instance)
    console.log('WASM executed successfully')
  } catch (e) {
    console.error('Error:', e.message)
  }
}

main()
