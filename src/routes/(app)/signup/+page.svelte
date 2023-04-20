<script lang="ts">
	import InputBox from '../../../lib/components/inputs/text/InputBox.svelte';
	import Modal from '../../../lib/components/containers/Modal.svelte';
	import { signInWithGoogle } from '../../../lib/authService';
	import AppButton from '../../../lib/components/inputs/buttons/AppButton.svelte';
	import EmailBox from '$lib/components/inputs/text/EmailBox.svelte';
	import PasswordBox from '$lib/components/inputs/text/PasswordBox.svelte';

	export let form;
	let showEmail = false;

	async function handleGoogle() {
		await signInWithGoogle();
	}

	async function handleEmail() {}

	function validatePassword() {
		console.log(form);
	}

	function showHideEmail() {
		showEmail = !showEmail;
	}
</script>

<Modal>
	{#if !showEmail}
		<div>
			<h3 class="mb-10 text-5xl">hey</h3>
			<div class="flex flex-col items-center justify-center gap-1">
				<span>SIGN UP</span>
				<AppButton btnText={'Google'} on:message={handleGoogle} />
				<AppButton btnText={'Email'} on:message={showHideEmail} />
			</div>
		</div>
	{:else if showEmail}
		<div class="w-96">
			<h3 class="text-5xl">sign-up</h3>
			<form method="POST" action="?/signup" class="bg-none mb-2">
				<EmailBox name="Email" required="true" />
				<PasswordBox name="Password" required="true" />
				<PasswordBox name="Verify Password" required="true" />
				<button type="submit">submit</button>
			</form>

			<AppButton btnText="cancel" btnStyle="borderless" on:message={showHideEmail} />
		</div>
	{/if}
</Modal>
