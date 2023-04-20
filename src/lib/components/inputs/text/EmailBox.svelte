<script lang="ts">
	export let name: string;
	export let required = false;
	export let binding = null;
</script>

<label for={name}>{name}</label><input
	class="h-full w-full bg-gray-300 invalid:outline-red-600"
	type="email"
	{required}
	id={name}
	bind:this={binding}
/>
