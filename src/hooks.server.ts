// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
// import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	// event.locals.user = await getUserInformation(event.cookies.get('sessionid'));
	// event.locals.supabase = createSupabaseServerClient({
	// 	supabaseUrl: PUBLIC_SUPABASE_URL,
	// 	supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
	// 	event
	// })

	// const {
	// 	data: { session }
	// } = await event.locals.supabase.auth.getSession()

	// if (session?.user) event.locals.user = session.user

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range'
		}
	})
}
