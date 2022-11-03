import mo from "motoko"

export type TestResult = {
  stdout: string
  stderr: string
  result: string | number
  test: string
  success: boolean
}

export async function runTests(mainSource: string, testSource: string) {
  let results: TestResult[] = []
  const basePkg = await mo.fetchPackage('base', 'dfinity/motoko-base/master/src')
  mo.loadPackage(basePkg)

  mo.write('main.mo', mainSource)
  mo.write("test.mo", testSource)

  // find all "test…()" functions
  const testFuncs = testSource.match(/test[a-zA-Z0-9_]+/g)
  // console.log(testFuncs)

  testFuncs?.forEach((testFunc) => {
    mo.write("test-runner.mo", `
      import TestSuite "./test"; 
      TestSuite.${testFunc}();
    `)
    const runResult = mo.run("test-runner.mo")
    const testResult = {
      ...runResult,
      test: testFunc,
      success: runResult.stdout.match(/(true : Bool)|(async true : )/) !== null
    }
    results.push(testResult)
  })


  return results
}