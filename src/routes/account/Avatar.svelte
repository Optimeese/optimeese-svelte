<!-- src/routes/account/Avatar.svelte -->
<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js'
	import { createEventDispatcher } from 'svelte'

	export let size = 10
	export let url: string
	export let supabase: SupabaseClient

	let avatar_url: string | null = null
	let uploading = false
	let files: FileList

	const dispatch = createEventDispatcher()

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path)

			if (error) {
				throw error
			}

			const url = URL.createObjectURL(data)
			avatar_url = url
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message)
			}
		}
	}

	const uploadAvatar = async () => {
		try {
			uploading = true

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.')
			}

			const file = files[0]
			const fileExt = file.name.split('.').pop()
			const filePath = `${Math.random()}.${fileExt}`

			let { error } = await supabase.storage.from('avatars').upload(filePath, file)

			if (error) {
				throw error
			}

			url = filePath
			setTimeout(() => {
				dispatch('upload')
			}, 100)
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			uploading = false
		}
	}

	$: if (url) downloadImage(url)
</script>

<div>
	{#if avatar_url}
		<img src={avatar_url} alt={avatar_url ? 'Avatar' : 'No image'} />
	{:else}
		<div class="avatar" />
	{/if}
	<input type="hidden" name="avatar_url" value={url} />

	<div style="width: {size}em;">
		<label for="single">
			{uploading ? 'Uploading ...' : 'Upload'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>

<style>
	img,
	.avatar {
		background-color: black;
		object-fit: cover;
		width: 10em;
		aspect-ratio: 1;
	}
</style>
