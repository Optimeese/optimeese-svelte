<script lang="ts">
	// import type { LayoutData } from './$types'

	// export let data: LayoutData
</script>

<header>
	<a href="/">Optimeese</a>
</header>

<slot />

<style>
	header {
		padding: var(--spacing);
		border-bottom: solid 1px var(--grey-200);
	}
</style>
