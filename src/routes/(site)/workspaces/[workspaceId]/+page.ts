import type { PageLoad } from './$types'

export const load = (async ({ parent, params }) => {
	const { workspaces } = await parent()

	return {
		workspace: workspaces.data.find(({ id }: { id: string }) => id === params.workspaceId)
	}
}) satisfies PageLoad
