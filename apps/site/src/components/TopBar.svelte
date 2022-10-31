<script lang="ts">
  import { challenge, tab } from "@/stores"
  import Nav from "./Nav.svelte"

  let tabs = ["content"]

  if ($challenge?.todo) {
    tabs.push("todo")
  }

  if ($challenge?.test) {
    tabs.push("run")
    tabs.push("test")
  }

  if ($challenge?.solution) {
    tabs.push("solution")
  }
</script>

<div class="px-8 h-full flex justify-between items-center text-(sm gray)">
  <div class="space-x-6">
    {#each tabs as tabName}
      <button
        class="capitalize tracking-widest transition-100  {$tab === tabName
          ? 'text-gray-4'
          : 'text-gray-5'}"
        on:click={() => ($tab = tabName)}
      >
        {tabName}
      </button>
    {/each}
  </div>
  <div class="space-x-6 tracking-widest text-(sky-3 opacity-75)">
    <Nav />
  </div>
</div>
