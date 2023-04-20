import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

/** @type {import('../../../.svelte-kit/types/src/routes').LayoutServerLoad} */
export async function load() {
	// Create a single supabase client for interacting with your database
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
	return { supabase };
}
