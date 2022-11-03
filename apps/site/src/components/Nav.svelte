<script lang="ts">
  import { challenge } from "@/stores"

  let links = [
    {
      label: "Previous",
      href: `/${$challenge?.page.previous}`,
    },
    {
      label: "~",
      href: "/",
    },
    {
      label: "Next",
      href: `/${$challenge?.page.next}`,
    },
  ]
</script>

{#each links as link}
  {#if link.href}
    <a href={link.href}>
      {link.label}
    </a>
  {/if}
{/each}
