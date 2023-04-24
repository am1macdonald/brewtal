import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { supabase } from '../../../lib/supabaseClient';

export const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    const creds = {
      email: '',
      password: '',
      options: {
        // TODO: change to variable
        emailRedirectTo: 'https://localhost:5173/signup'
      }
    };
    const password = formData.get('password') as string;
    const validate = formData.get('verify') as string;
    if (validate && password === validate && validate !== '') {

      creds.email = formData.get('email') as string || '';
      creds.password = password || '';

      console.log(password);

    } else {
      return fail(400, { email: creds.email, incorrect: true });
    }
    try {
      const { data, error } = await supabase.auth.signUp(creds);
      return { success: true };
    } catch (error) {
      console.log(error);
    }
  }
} satisfies Actions;
