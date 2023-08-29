import type { PageServerLoad } from './$types'

export const load = (async ({ locals: { supabase } }) => {
	return {
		projects: supabase.from('projects').select('*, profiles(*)')
	}
}) satisfies PageServerLoad

export const actions = {
	create: async ({ request, locals: { supabase } }) => {
		const data = await request.formData()
		const name = data.get('name')

		const { error } = await supabase.from('projects').insert({ name })

		if (error) {
			return { error }
		}
		console.log(data)

		return {
			success: true
		}
	}
}
