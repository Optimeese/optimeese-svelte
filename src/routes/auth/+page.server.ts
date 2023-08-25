import { fail, redirect, type Actions } from '@sveltejs/kit'

export const actions = {
	signIn: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const { data, error } = supabase.auth.signInWithPassword({
			email,
			password
		})

		console.log({ data, error })

		if (error) {
			return fail(error.status || 500, {
				error: error.message || 'Server error',
				values: {
					email
				}
			})
		}

		throw redirect(303, '/')
	}
} satisfies Actions
