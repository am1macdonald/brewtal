<script>
	import HeaderSearch from '$lib/components/inputs/text/HeaderSearch.svelte';
</script>

<div class="w-full h-12 bg-amber-300 flex flex-row justify-between items-center fixed">
	<div class="flex flex-row justify-start items-center pl-4 gap-2">
		<a class="font-display text-5xl" href="pour">BREWTAL</a>
		<HeaderSearch />
	</div>
	<div>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</div>
	<div>
		<ul class="pr-4">
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	</div>
</div>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 2em;
		//list-style: none;
	}
</style>
