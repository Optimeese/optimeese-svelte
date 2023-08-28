<script lang="ts">
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

<header>
	<h1>
		<a href="/">Optimeese</a>
	</h1>

	<nav>
		{#if user}
			<a href="/account">Profile</a>
		{:else}
			<a href="/auth">Login</a>
			<a href="/auth">Signup</a>
		{/if}
	</nav>
</header>

<slot />

<style>
	@import '../css/style.css';

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& a {
			text-decoration: none;
			color: inherit;
		}
	}
</style>
