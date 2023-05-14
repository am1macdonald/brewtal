<script lang="ts">
  import type { SuggestionProperty } from "$lib/types/types";
  export let suggestions: SuggestionProperty [];
</script>

<input class="flex justify-between items-center w-96" type="text">
<div>
  <ul>
    {#each suggestions as s }
    <li></li>
    {/each}
  </ul>
</div>
