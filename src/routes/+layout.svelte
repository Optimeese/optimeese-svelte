<script lang="ts">
	import type { LayoutData } from './$types'

	export let data: LayoutData

	const { user } = data
</script>

<header>
	<h1><a href="/">Optimeese</a></h1>

	<nav>
		<a href="/">Home</a>
		{#if user}
			<a href="/profile">{user.email}</a>
		{:else}
			<a href="/auth">Log in</a>
		{/if}
	</nav>
</header>

<slot />

<style>
	@import '/src/css/style.css';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& a {
			text-decoration: none;
			color: inherit;
		}
	}
</style>
