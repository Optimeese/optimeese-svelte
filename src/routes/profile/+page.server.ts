import { redirect, type Actions } from '@sveltejs/kit'

export const actions = {
	default: async ({ locals: { supabase } }) => {
		supabase.auth.signOut()
		throw redirect(303, '/')
	}
} satisfies Actions
