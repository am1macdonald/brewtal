<<<<<<< HEAD
<div>
	<form action="?/login" method="post">
		<label for="username"><input type="text" id="username" /></label><label for="password"
			><input type="password" id="password" /></label
		>
=======
<script lang="ts">
	import InputBox from "$lib/components/inputs/InputBox.svelte";
	export let action: string;
</script>

<div>
	<form action="?/login" method="post">
		<InputBox type="username" name="username"/>
		<InputBox type="password" name="password"/>
>>>>>>> ab6054a (remove large files from git)
		<div>
			<button>LOGIN</button>
		</div>
	</form>
</div>
<div><span>New here? <a href="#">Create an account...</a></span></div>
