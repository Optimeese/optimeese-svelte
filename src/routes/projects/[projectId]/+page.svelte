<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { project } = data
</script>

<h2>{project.data?.name}</h2>

<pre><code>{JSON.stringify(project.data, null, 2)}</code></pre>
