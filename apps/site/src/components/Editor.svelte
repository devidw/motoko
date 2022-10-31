<script lang="ts">
  import { onMount } from "svelte"
  import ace from "ace-builds"
  import theme from "ace-builds/src-noconflict/theme-tomorrow_night"
  import "ace-builds/src-noconflict/mode-javascript"
  import { editor as editorStore } from "@/stores"

  export let value: string
  export let readOnly: boolean = false
  let root: HTMLElement

  onMount(() => {
    const editorInstance = ace.edit(root, {
      value,
      theme,
      readOnly,
      mode: "ace/mode/javascript",
      useWorker: false,
      showLineNumbers: false,
      highlightActiveLine: false,
    })

    if (!readOnly && !$editorStore) {
      $editorStore = editorInstance
    }
  })
</script>

<div>
  <div class="h-4 ml-[33px] bg-[#1D1F21]" />
  <div bind:this={root} class="h-[calc(100%_-_1rem)] text-[1rem]" />
</div>
