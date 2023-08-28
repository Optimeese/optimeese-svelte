<script lang="ts">
	import type { PageData } from './$types'
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'
	import Avatar from './Avatar.svelte'

	export let data: PageData
	export let form: HTMLFormElement

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm: HTMLFormElement
	let loading = false
	let full_name: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''
	let website: string = profile?.website ?? ''
	let avatar_url: string = profile?.avatar_url ?? ''

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<form
	class="form-widget"
	method="post"
	action="?/update"
	use:enhance={handleSubmit}
	bind:this={profileForm}
>
	<Avatar
		{supabase}
		bind:url={avatar_url}
		size={10}
		on:upload={() => {
			profileForm.requestSubmit()
		}}
	/>
	<div>
		<label for="email">Email</label>
		<input id="email" type="text" value={session.user.email} disabled />
	</div>

	<div>
		<label for="full_name">Full Name</label>
		<input id="full_name" name="full_name" type="text" value={form?.full_name ?? full_name} />
	</div>

	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" value={form?.username ?? username} />
	</div>

	<div>
		<label for="website">Website</label>
		<input id="website" name="website" type="url" value={form?.website ?? website} />
	</div>

	<div>
		<input
			type="submit"
			class="button block primary"
			value={loading ? 'Loading...' : 'Update'}
			disabled={loading}
		/>
	</div>
</form>

<form method="post" action="?/signout" use:enhance={handleSignOut}>
	<div>
		<button class="button block" disabled={loading}>Sign Out</button>
	</div>
</form>
