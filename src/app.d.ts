import type { User } from '@supabase/supabase-js'
import { SupabaseClient, Session } from '@supabase/supabase-js'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>
			user?: User
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
