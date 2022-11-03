<script lang="ts">
  // import "../styles/adoc.scss"
  import "../styles/doc.styl"

  export let title: string | undefined = undefined
  export let value: string
</script>

<div class="px-8 pt-4 challenge__prompt">
  {#if title}
    <h1>
      {title}
    </h1>
  {/if}
  {@html value}
</div>

<!-- <style lang="scss" is:global>
  .challenge__prompt {
    @import "../../node_modules/adoc-skin/src/config";
    @import "../../node_modules/adoc-skin/src/adoc-skin";
  }
</style> -->
