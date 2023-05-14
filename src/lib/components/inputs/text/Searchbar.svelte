<script lang="ts">
	import type { SuggestionProperty } from '$lib/types/types';
	export let suggestions: SuggestionProperty[];
	function fireEvent(val: unknown) {
		console.log(val);
	}
	export let value: string;
</script>

<div class="flex flex-col justify-start items-center w-fit">
	<label class="border-2 border-solid rounded border-gray-70 w-fit flex flex-row justify-between items-center" for="search">
		<img class="invert h-12 w-12" src="/icons/icon-search.svg" alt="search" />
		<input
			bind:value
			name="search"
			class="flex justify-between items-center w-96 border-none"
			type="text"
		/>
	</label>
	<div>
		<ul>
			{#each suggestions as s}
				<li>
					<button on:click={() => fireEvent(s.value)}>
						{#if s.url !== ''}
							<a href={s.url}>{s.content}</a>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
