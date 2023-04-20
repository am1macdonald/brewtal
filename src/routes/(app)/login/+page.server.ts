import { variables } from '$lib/variables';
import type {Actions} from "@sveltejs/kit";

export const actions = {
	login: async (event: any) => {
		console.log(event);
		// const data = await event.request.formData();
		// const formData = new FormData();
		// if (data) {
		// 	formData.append('email', data.get('login-email') ?? '');
		// 	formData.append('password', data.get('login-password') ?? '');
		// }
		// const url = `${variables.apiBasePath}/newsletter/register`;
		// console.log(formData, url)
		// try {
		// 	const response = await fetch(url, {
		// 		method: 'POST',
		// 		body: formData
		// 	});
		// 	console.log(response);
		// } catch (error) {
		// 	console.log(error);
		// }
		//

	}
} satisfies Actions;

