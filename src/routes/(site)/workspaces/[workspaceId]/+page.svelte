<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { workspace } = data
</script>

<a href="/workspaces">Back</a>

<h1>{workspace.name}</h1>

<div>Level: {workspace.workspace_status}</div>
<div>Invite: {workspace.invite_status}</div>
<div>Role: {workspace.role}</div>
