<script lang="ts">
	import AppSidePanel from '$lib/components/layout/AppSidePanel.svelte';

	const links = [
		{ text: 'Profile', route: '/profile' },
		{ text: 'My Brews', route: '/profile/bruise' },
		{ text: 'Settings', route: '/profile/settings' }
	];
</script>

<AppSidePanel>
	<div slot="sidePanel">
		<h6>BREWTAL</h6>
		<ul>
			{#each links as { text, route }}
				<li>
					<a href={route}>{text}</a>
				</li>
			{/each}
		</ul>
	</div>
	<slot slot="viewport" />
</AppSidePanel>
