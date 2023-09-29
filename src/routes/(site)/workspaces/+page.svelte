<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { workspaces } = data
</script>

<h1>Workspaces</h1>

<form method="POST" action="?/create">
	<label for="name">Name</label>
	<input type="text" id="name" name="name" placeholder="New workspace name" autocomplete="off" />
	<button type="submit">Create</button>
</form>

{#if workspaces.error}
	<pre>
		{JSON.stringify(workspaces.error, null, 2)}
	</pre>
{:else}
	<section>
		{#each workspaces.data as workspace}
			<a href="/workspaces/{workspace.id}">
				<article>
					<h2>
						{workspace.name} ({workspace.workspace_status})
					</h2>
					<span>{workspace.invite_status}</span>
					<span>{workspace.role}</span>
				</article>
			</a>
		{/each}
	</section>
{/if}

<style>
	section {
		display: grid;
		gap: var(--spacing);
	}

	article {
		background-color: var(--grey-100);
		border: none;
	}
</style>
