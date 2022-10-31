<script lang="ts">
  import Editor from "./Editor.svelte"
  import Text from "./Text.svelte"
  import TestRunner from "./TestRunner.svelte"
  import { challenge, tab } from "@/stores"
</script>

{#if $challenge}
  {#if $tab === "content"}
    <Text value={$challenge.content} />
  {:else if $tab === "todo" && $challenge.todo}
    <Text value={$challenge.todo} />
  {:else if $tab === "run" && $challenge?.test}
    <TestRunner testSource={$challenge?.test} />
  {:else if $tab === "test" && $challenge?.test}
    <Editor value={$challenge?.test} readOnly={true} />
  {:else if $tab === "solution" && $challenge?.solution}
    <Editor value={$challenge?.solution} readOnly={true} />
  {/if}
{/if}
