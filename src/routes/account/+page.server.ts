import type { PageServerLoad } from './$types'
import { fail, redirect, type Actions } from '@sveltejs/kit'

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession()

	if (!session) {
		throw redirect(303, '/')
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name, website, avatar_url`)
		.eq('id', session.user.id)
		.single()

	return { session, profile }
}) satisfies PageServerLoad

export const actions = {
	update: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData()
		const full_name = formData.get('full_name') as string
		const username = formData.get('username') as string
		const website = formData.get('website') as string
		const avatar_url = formData.get('avatar_url') as string

		const session = await getSession()

		const { error } = await supabase.from('profiles').upsert({
			id: session?.user.id,
			full_name,
			username,
			website,
			avatar_url,
			updated_at: new Date()
		})

		if (error) {
			return fail(500, {
				full_name,
				username,
				website,
				avatar_url
			})
		}

		return {
			full_name,
			username,
			website,
			avatar_url
		}
	},
	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession()
		if (session) {
			await supabase.auth.signOut()
			throw redirect(303, '/')
		}
	}
} satisfies Actions
