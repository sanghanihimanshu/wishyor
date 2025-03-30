<script>
  import * as LucideIcons from "@lucide/svelte";

  export let name = "TriangleAlert"; // Default icon name
  export let className = "w-6 h-6 text-blue-500"; // Default styling

  // Dynamically select the icon component
  const IconComponent = LucideIcons[name] || null;
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} class={className} />
{:else}
  <span class="text-red-500">⚠️ Invalid Icon</span>
{/if}


