import { redirect } from '@sveltejs/kit'

// @ts-ignore
export const GET = async (request) => {
    const { url, locals: { supabase } }  = request;
    const code = url.searchParams.get('code')

    console.log(code)

    if (code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    throw redirect(303, '/app/pour')
}
