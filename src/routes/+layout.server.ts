import type { LayoutServerLoadEvent } from './$types'

export const load = async ({ locals }: LayoutServerLoadEvent) => {
	return { user: locals.user }
}
