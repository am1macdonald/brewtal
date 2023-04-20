<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let btnText: string;
	export let btnType: 'submit' | 'reset' | 'button' = 'button';
	export let btnStyle: 'normal' | 'borderless' = 'normal';
	const dispatch = createEventDispatcher();
	function fireEvent() {
		dispatch('message', {
			text: 'clicked'
		});
	}
</script>

<button
	class="pb-2 pl-3 pr-3 pt-2 capitalize {btnStyle === 'borderless' ? 'border-none' : 'bg-gray-400'}"
	on:click={fireEvent}
	type={btnType}>{btnText}</button
>
