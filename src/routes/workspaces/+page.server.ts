import type { Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

// export const load = (async ({ locals: { supabase, getSession } }) => {
// 	const session = await getSession()
// 	const { user } = session || { user: null }
// 	return {
// 		// select
// 		//   *
// 		// from
// 		//   public.workspaces
// 		//   left join public.workspace_users on public.workspaces.id = public.workspace_users.workspace
// 		workspaces: supabase.rpc('get_workspaces_and_roles')
// 	}
// }) satisfies PageServerLoad

export const actions = {
	create: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const name = formData.get('name')

		const { data, error } = await supabase.rpc('create_workspace_and_user', { name })

		console.log({
			data,
			error
		})

		if (error) {
			return { error }
		}

		console.log(data)

		return {
			success: true
		}
	}
} satisfies Actions
