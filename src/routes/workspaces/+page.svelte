<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { workspaces } = data
</script>

<h1>Workspaces</h1>

<form method="POST" action="?/create">
	<label for="name">Name</label>
	<input type="text" id="name" name="name" placeholder="New workspace name" />
	<button type="submit">Create</button>
</form>

{#if workspaces.error}
	<pre>
		{JSON.stringify(workspaces.error, null, 2)}
	</pre>
{:else}
	<pre>
		{JSON.stringify(workspaces, null, 2)}
	</pre>
	<ul>
		{#each workspaces.data as workspace}
			<li>
				<a href="/workspaces/{workspace.id}">
					<h2>
						{workspace.name} ({workspace.workspace_status})
					</h2>
					<span>{workspace.invite_status}</span>
					<span>{workspace.role}</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}
