// Simple test of Javy IO
const inputBytes = Javy.IO.readInput()
const inputStr = new TextDecoder().decode(inputBytes)
const output = JSON.stringify({ received: inputStr.length, echo: inputStr.slice(0, 50) })
Javy.IO.writeOutput(new TextEncoder().encode(output))
