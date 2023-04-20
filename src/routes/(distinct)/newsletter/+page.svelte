<script lang="ts">
	import NewsLetterSignup from '../../../lib/components/NewsLetterSignup.svelte';

	let showInfo = false;
	let showSignup = false;

	function handleShowInfo() {
		showInfo = !showInfo;
	}
	function handleShowSignup() {
		showInfo = false;
		showSignup = !showSignup;
	}
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-32 bg-gray-50">
	<div class="flex max-w-full flex-col items-center justify-center">
		<h1
			class="{showInfo !== showSignup
				? 'text-8xl'
				: 'lg:text-[300px] '}block font-display text-8xl leading-tight tracking-wider"
		>
			BREWTAL
		</h1>
		<span class="font-body text-lg">'Love the Grind'</span>
	</div>
	{#if !showSignup && !showInfo}
		<button on:click={handleShowInfo}>Learn More...</button>
	{:else if showInfo}
		<div class="flex flex-col items-center justify-center">
			<p class="w-auto p-6 font-body md:max-w-screen-md tracking-wide">
				"Are you tired of sipping mediocre coffee and throwing away precious beans? Say goodbye to
				frustrating trial and error with Brewtal, the ultimate social platform for coffee
				enthusiasts. Share your brewing profiles and discover tried-and-true recipes from the
				Brewtal community while embracing our mantra to 'Love the Grind.' As a Brewtal development
				newsletter subscriber, you'll be the first to know about new features, exclusive events, and
				insider tips. Join our tribe and unlock the secret to the perfect cup of coffee today!"
			</p>
			<button on:click={handleShowSignup}>Sign up for our newsletter...</button>
		</div>
	{:else if showSignup}
		<div class="flex flex-col items-center justify-center gap-3">
			<NewsLetterSignup />
			<button on:click={handleShowSignup}>No Thanks...</button>
		</div>
	{/if}
</div>
