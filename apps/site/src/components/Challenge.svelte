<script lang="ts">
  import type { Challenge } from "../lib/challenges"
  import Editor from "./Editor.svelte"
  import LeftPanel from "./LeftPanel.svelte"
  import TopBar from "./TopBar.svelte"
  import { challenge as challengeStore } from "@/stores"

  export let challenge: Challenge

  $challengeStore = challenge
</script>

<div class="h-[40px] sticky top-0 z-5 backdrop-blur-2xl border-b-(1 dark-1)">
  <div class="max-w-[1700px] mx-auto h-full">
    <TopBar />
  </div>
</div>

<div class="h-[calc(100vh_-_40px)]">
  <div class="max-w-[1700px] mx-auto h-full grid grid-(cols-2)">
    <LeftPanel />
    {#if challenge.main}
      <Editor value={challenge.main} />
    {/if}
  </div>
</div>
