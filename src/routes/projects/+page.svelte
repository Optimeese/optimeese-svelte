<script lang="ts">
	import { readableDate } from '$lib/utils'
	import type { PageData } from './$types'

	export let data: PageData

	const { projects } = data
</script>

<h1>Projects</h1>

<form method="POST" action="?/create">
	<label for="name">Name</label>
	<input type="text" id="name" name="name" placeholder="New project name" />
	<button type="submit">Create</button>
</form>

{#if projects.error}
	<pre>
		{JSON.stringify(projects.error, null, 2)}
	</pre>
{:else}
	<ul>
		{#each projects.data as project}
			<li>
				<a href="/projects/{project.id}">
					<h2>
						{project.name}
					</h2>
					<span>
						{readableDate(project.updated_at)}
					</span>
					<span>
						by {project.profiles.full_name}
					</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}
