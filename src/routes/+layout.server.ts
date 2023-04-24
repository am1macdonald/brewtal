import type { Session } from '@supabase/supabase-js'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
  return {
    session: await getSession()
  } as { session: Awaited<Session> }

}
