<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>Test</h1>

{#await data.awaited.results}
	<p>Waiting for data...</p>
{:then data}
	<p>Received data:</p>
	<pre>{JSON.stringify(data, null, 2)}</pre>
{:catch error}
	<p>Error: {error.message}</p>
{/await}
