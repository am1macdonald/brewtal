<script lang="ts">
	import type { SuggestionProperty } from '$lib/types/types';
	export let suggestions: SuggestionProperty[];
	function fireEvent(val: unknown) {
		console.log(val);
	}
	export let value: string;
</script>

<div class="flex flex-col justify-start items-center w-fit">
	<input bind:value class="flex justify-between items-center w-96" type="text" />
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
