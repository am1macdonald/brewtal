<script lang="ts">
  import Searchbar from "$lib/components/inputs/text/Searchbar.svelte";
  import type { SuggestionProperty } from "$lib/types/types";
  import MainFeed from "$lib/components/containers/MainFeed.svelte";

  const suggestions: SuggestionProperty[] = [];
</script>

<MainFeed></MainFeed>
