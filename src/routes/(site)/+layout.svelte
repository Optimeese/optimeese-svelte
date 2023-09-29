<script lang="ts">
	import '../../css/style.css'
	import type { LayoutData } from './$types'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data: LayoutData

	let { supabase, session, user } = data
	$: ({ supabase, session, user } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<header class="container">
	<a href="/" id="logo">Optimeese</a>

	<nav>
		<a href="/editor">Editor</a>
		<a href="/improvements">Improvements</a>
		{#if user}
			<a href="/workspaces">Workspaces</a>
			<a href="/projects">Projects</a>
			<a href="/account">Profile</a>
		{:else}
			<a href="/auth">Login</a>
			<a href="/auth">Signup</a>
		{/if}
	</nav>
</header>

<main class="container">
	<slot />
</main>

<style>
	#logo {
		color: var(--h1-color);
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
