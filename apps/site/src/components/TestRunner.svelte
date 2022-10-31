<script lang="ts">
  import { runTests, type TestResult } from "motoko-test"
  import { editor } from "@/stores"

  export let testSource: string
  let mainSource: string
  let isRunning = false
  let error = ""
  let results: TestResult[] = []

  async function runTest() {
    isRunning = true
    results = []
    if (!$editor) return
    mainSource = $editor.getValue()
    results = await runTests(mainSource, testSource)
    console.log(results)
    error = results[0]?.stderr
    isRunning = false
  }
</script>

<div
  class="pt-8 pl-8 pr-4 space-y-8 {isRunning
    ? 'cursor-wait animate-pulse'
    : ''}"
>
  <button
    on:click={runTest}
    disabled={isRunning}
    class="btn text-sky-3 bg-gray-7"
  >
    Run
  </button>

  {#if error}
    <pre
      class="px-4 py-2 rounded-lg bg-red-9 font-mono
  whitespace-pre-wrap">{error}</pre>
  {:else}
    <div class="space-y-6">
      {#each results as result}
        <div class="flex items-center space-x-3">
          <div>
            <div
              class="w-5 h-5 rounded-full {result.success
                ? 'bg-green'
                : 'bg-red'}"
            />
          </div>
          <div class="font-mono {result.success ? 'text-green' : 'text-red'}">
            {result.test}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="stylus">
  button[disabled]
    cursor not-allowed
</style>
