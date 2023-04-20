<div class="w-screen px-2 sm:w-96">
	<form method="POST" action="?/register">
		<div class="flex flex-col  place-content-center">
			<label for="newsletter-name-registration">Name</label><input
				class="h-12 w-full bg-gray-300"
				type="text"
				name="newsletter-name-registration"
				id="newsletter-name-registration"
				pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
				required
			/>
			<label for="newsletter-email-registration">Email</label>
			<div class="focus: flex h-12 flex-row content-center justify-center">
				<input
					class="h-full w-full bg-gray-300 invalid:outline-red-600"
					type="email"
					name="newsletter-email-registration"
					id="newsletter-email-registration"
					required
				/>
			</div>
			<button class="mt-5 h-12 w-full bg-gray-400 font-body">Submit</button>
		</div>
	</form>
</div>
