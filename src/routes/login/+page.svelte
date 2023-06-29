<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import {browser} from "$app/environment";

	export let data;
</script>

<div class="flex-col justify-center items-center flex w-full h-full">
	<h2 class="text-9xl font-display">BREWTAL</h2>
	<div class="col-6 form-widget w-96">
		<Auth
				supabaseClient={data.supabase}
				view="magic_link"
				redirectTo={`${data.url}/auth/callback`}
				showLinks={false}
				appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
		/>
	</div>
</div>
