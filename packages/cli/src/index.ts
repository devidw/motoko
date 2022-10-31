import { runTests } from "motoko-test"
import { readFileSync } from "fs"

const path = process.argv[2]

if (!path) {
  console.error("Usage: motoko-test <path-to-test-directory>")
  process.exit(1)
}

const main = readFileSync(`${path}/main.mo`, 'utf8').toString()
const tests = readFileSync(`${path}/test.mo`, 'utf8').toString()

  ; (async () => {
    const out = await runTests(main, tests)
    console.log(out)
  })()