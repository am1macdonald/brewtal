<script lang="ts">
	import { enhance } from '$app/forms';
	import type { RegisterFormData } from '$lib/types/form';
	export let form: RegisterFormData;
	$: {
		console.log(form);
	}
</script>

<div class="flex-col justify-center items-center flex w-full h-full">
	<h2 class="text-9xl font-display">BREWTAL</h2>
	<div class="col-6 form-widget w-96">
		<form
			use:enhance
			class="flex flex-col justify-center items-center"
			action="?/signup"
			method="post"
		>
			<div class="flex flex-col justify-center items-center">
				<label for="email">Email</label>
				<input
					class:FieldError={form?.emailInUse || form?.invalidEmail}
					type="text"
					name="email"
					id="email"
					class="input"
					value={form?.email ?? ''}
					required
				/>
			</div>
			<div class="flex flex-col justify-center items-center">
				<label for="password">Password</label>
				<input
					class:fieldError={form?.weakPassword}
					type="password"
					name="password"
					id="password"
					class="input"
					value={form?.password ?? ''}
					required
				/>
			</div>
			<div class="flex flex-col justify-center items-center">
				<label for="password">Confirm Password</label>
				<input
					class:fieldError={form?.passwordsDontMatch}
					type="password"
					name="confirm-password"
					id="confirm-password"
					class="input"
					value={form?.confirmPassword ?? ''}
					required
				/>
			</div>
			<div>
				{#if form?.error}
					<small>{form?.message}</small>
				{/if}
			</div>
			<div class="flex flex-col justify-center items-center">
				<button type="submit" class="btn btn-primary">Submit</button>
				<a href="/login">Already have an account?</a>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.fieldError {
		outline: 2px solid #ff0000;
	}
</style>
