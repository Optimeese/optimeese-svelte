import type { PageServerLoad } from './$types'

export const load = (async ({ locals: { supabase }, params }) => {
	return {
		project: supabase.from('projects').select('*, profiles(*)').eq('id', params.projectId).single()
	}
}) satisfies PageServerLoad
