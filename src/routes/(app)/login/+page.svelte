<script>
	import AppButton from '$lib/components/inputs/buttons/AppButton.svelte';
	import Modal from '$lib/components/containers/Modal.svelte';

	let loggedIn = false;

	function handleSignOut() {
		loggedIn = false;
	}

	function handleSignIn() {
		loggedIn = true;
	}
</script>

<Modal>
	<h3 class="mb-10 text-5xl">hey</h3>
	<div class="flex flex-col items-center justify-center gap-1">
			<span>SIGN IN</span>
			<AppButton btnText={'Google'} on:message={handleSignIn} />
			<AppButton btnText={'Email'} on:message={handleSignIn} />
	</div>
	<div><span>new?</span><span><a href="/signup">sign up.</a></span></div>
	<span class="self-start">or don't...</span>
</Modal>
