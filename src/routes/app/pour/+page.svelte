<script lang="ts">
  import Searchbar from "$lib/components/inputs/text/Searchbar.svelte";
  import type { SuggestionProperty } from "$lib/types/types";

  const suggestions: SuggestionProperty[] = [];
</script>

<div>
  <h1>Latest Brews</h1>

  <div>
    <Searchbar suggestions={suggestions} /> 
  </div>
</div>
