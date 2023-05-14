<script>
	import Container from '$lib/components/containers/Container.svelte';
	import AppButton from '$lib/components/inputs/AppButton.svelte';
</script>

<div class="h-screen flex-">
	<Container>
    <div>
			<div class="bg-gray-400 h-36 w-24">
				<img alt="profile pic" src="#" />
				<AppButton btnText="upload" />
			</div>

			<div>
        <h3 class='text-white'>My Profile</h3>
        <div>
          <ul><li></li></ul>
        </div>
      </div>
		</div>
	</Container>
</div>

