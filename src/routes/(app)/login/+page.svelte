<script>
	import AppButton from '$lib/components/inputs/buttons/AppButton.svelte';
	import Modal from '$lib/components/containers/Modal.svelte';
	import { signInWithGoogle } from '$lib/authService';
</script>

<Modal>
	<h3 class="mb-10 text-5xl">hey</h3>
	<div class="flex flex-col items-center justify-center gap-1">
		<span>SIGN IN</span>
		<AppButton btnText={'Google'} on:message={signInWithGoogle} />
	</div>
</Modal>
