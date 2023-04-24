<script lang="ts">
	import Modal from '$lib/components/containers/Modal.svelte';
	import { signInWithGoogle } from '$lib/authService';
	import AppButton from '$lib/components/inputs/buttons/AppButton.svelte';
	import EmailBox from '$lib/components/inputs/text/EmailBox.svelte';
	import PasswordBox from '$lib/components/inputs/text/PasswordBox.svelte';

	let showEmail = false;
	export let form;

	async function handleGoogle() {
		await signInWithGoogle();
	}

	function showHideEmail() {
		showEmail = !showEmail;
	}
</script>

<Modal>
	{#if !showEmail && !form}
		<div>
			<h3 class="mb-10 text-5xl">hey</h3>
			<div class="flex flex-col items-center justify-center gap-1">
				<span>SIGN UP</span>
				<AppButton btnText={'Google'} on:message={handleGoogle} />
				<AppButton btnText={'Email'} on:message={showHideEmail} />
			</div>
		</div>
	{:else if form?.success}
		<div>WOW</div>
	{:else}
		<div class="w-96">
			<h3 class="text-5xl">sign-up</h3>
			<form method="POST" action="?/signup" class="bg-none mb-2">
				<EmailBox name="email" required={true} />
				<PasswordBox name="password" required={true} />
				<PasswordBox name="verify" required={true} />
				{#if form?.incorrect}<p class="error">Passwords do not match!</p>{/if}
				<button type="submit">submit</button>
			</form>

			<AppButton btnText="cancel" btnStyle="borderless" on:message={showHideEmail} />
		</div>
	{/if}
</Modal>
