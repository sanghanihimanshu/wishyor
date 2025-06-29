<script>
  import * as LucidIcon from "@lucide/svelte";

  export let name = "TriangleAlert"; // Default icon name
  export let className = "w-6 h-6 text-blue-500"; // Default styling
  export let attributes = {}; // Default styling

  // Dynamically select the icon component
  const IconComponent = LucidIcon[name] || null;
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} class={className} {...attributes} />
{:else}
  <span class="text-red-500">⚠️ Invalid Icon</span>
{/if}
