import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';
import type { Session } from '@supabase/supabase-js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  });
  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session as Session;
  }

  if (event.url.pathname.startsWith('/app')) {
    const session = await event.locals.getSession();
    console.log(session);
    if (!session) {
      // the user is not signed in
      throw redirect(303, '/');
    }
  }

  if (
    event.url.pathname.startsWith('/api') &&
    event.request.method === 'POST'
  ) {
    const session = await event.locals.getSession();
    if (!session) {
      // the user is not signed in
      throw error(303, '/');
    }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range';
    }
  })
}

