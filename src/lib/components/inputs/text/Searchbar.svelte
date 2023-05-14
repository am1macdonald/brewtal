<script lang="ts">
  import type { SuggestionProperty } from "$lib/types/types";
  export let suggestions: SuggestionProperty [];
  function fireEvent(val: unknown) {

    console.log(val);
  }
</script>

<input class="flex justify-between items-center w-96" type="text">
<div>
  <ul>
    {#each suggestions as s }
    <li on:click={() => fireEvent(s.value)} >
        {#if s.url !== ''}
          <a href="{s.url}">{s.content}</a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
