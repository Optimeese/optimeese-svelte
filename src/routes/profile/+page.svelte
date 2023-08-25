<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { user } = data
</script>

<h1>Welcome</h1>

<pre><code>{JSON.stringify(data, null, 2)}</code></pre>

<form method="POST">
	<button>Log out</button>
</form>
