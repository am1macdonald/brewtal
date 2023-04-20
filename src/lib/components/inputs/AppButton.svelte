<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let btnText: string;
	const dispatch = createEventDispatcher();
	function onClick() {
		dispatch('btnClicked', {});
	}
</script>

<button class="bg-gray-400 pb-2 pl-3 pr-3 pt-2 capitalize" on:click={onClick}>{btnText}</button>
