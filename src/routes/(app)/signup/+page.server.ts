import type { Actions } from '@sveltejs/kit';
import { supabase } from '../../../lib/supabaseClient';

export const actions = {
	signup: async (event) => {
		console.log(event);
		const formData = await event.request.formData();
		const creds = {
			email: '',
			password: '',
			options: {
				// TODO: change to variable
				emailRedirectTo: 'https://localhost:5173/welcome'
			}
		};
		if (formData) {
			console.log(formData);
			creds.email = String(formData.get('email'));
			const password = (creds.password = String(formData.get('password')));
			const validate = (creds.password = String(formData.get('validate')));
			if (password === validate) {
				creds.password = password;
			} else {
				throw new Error('password does not match!');
			}
		}
		try {
			const { data, error } = await supabase.auth.signUp(creds);
			console.log(data ?? error);
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
