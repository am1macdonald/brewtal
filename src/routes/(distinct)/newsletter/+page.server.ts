import { variables } from '$lib/variables';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	register: async (event) => {
		const data = await event.request.formData();
		const formData = new FormData();
		if (data) {
			formData.append('name', data.get('newsletter-name-registration') ?? '');
			formData.append('email', data.get('newsletter-email-registration') ?? '');
		}
		const url = `${variables.apiBasePath}/newsletter/register`;
		console.log(formData, url);
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: formData
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
