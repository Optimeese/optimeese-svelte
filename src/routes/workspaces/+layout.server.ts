import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: { supabase, getSession } }) => {
	return {
		workspaces: supabase.rpc('get_workspaces_and_roles')
		// workspaces: []
	}
}) satisfies LayoutServerLoad
