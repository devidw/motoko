import { Command } from 'commander'
import { runTests } from "motoko-test"
import { readFileSync } from "fs"

const program = new Command()

program
  .version(process.env.npm_package_version || "0.0.0")
  .argument("<name>", "Name of the challenge to run, the subdirectory in the challenges directory")
  .option("-sol, --solution", "Run the solution instead of the challenge", false)
  .parse(process.argv)

const name = program.args[0]
const againstSolution = program.getOptionValue("solution")

const main = readFileSync(`./challenges/${name}/${againstSolution ? "solution" : "main"}.mo`, 'utf8').toString()
const tests = readFileSync(`./challenges/${name}/test.mo`, 'utf8').toString()

  ; (async () => {
    const out = await runTests(main, tests)
    console.log(out)
  })()