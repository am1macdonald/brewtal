// See https://kit.svelte.dev/docs/types#app

import type { SupabaseClient } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      getSession: () => Promise<session | null>;
      supabase: SupabaseClient<Database>;
    }
    interface PageData {
      session: Session | null
    }
    // interface Platform {}
  }
}

export { };
