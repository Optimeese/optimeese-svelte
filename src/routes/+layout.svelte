<script lang="ts">
	import type { LayoutData } from './$types'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data: LayoutData

	let { supabase, session } = data
	$: ({ supabase, session } = data)

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
	<h1>Optimeese</h1>
</header>

<slot />

<style>
	@import '../css/style.css';
</style>
