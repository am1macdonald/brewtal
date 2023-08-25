<script lang="ts">
	import { enhance } from '$app/forms';
	import {user} from "../../stores";
	export let form: HTMLFormElement
	export let login: any;
	export let data;

	$: clearUser = data?.clearUser;

	$: {
		if (clearUser) user.set(undefined);
	}
</script>

<div class="flex-col justify-center items-center flex w-full h-full">
	<h2 class="text-9xl font-display">BREWTAL</h2>

	<div class="col-6 form-widget w-96">
		<form
			use:enhance
			class="flex flex-col justify-center items-center"
			action='?/login'
			method="post"
			bind:this={form}
		>
			<div class="flex flex-col justify-center items-center">
				<label for="email">Username</label>
				<input
					type="text"
					name="email"
					id="email"
					class="input"
					value={login?.email ?? ''}
					required
				/>
			</div>
			<div class="flex flex-col justify-center items-center">
				<label for="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					class="input"
					value={login?.password ?? ''}
					required
				/>
			</div>
			<div class="flex flex-col justify-center items-center">
				<input type="submit" value="Login" class="btn btn-primary" />
				<a href="/signup">signup</a>
			</div>
		</form>
	</div>
</div>
