<script lang="ts">
	import type { PageData } from './$types'

	let state: 'signUp' | 'signIn' = 'signUp'

	// export let data: PageData;
</script>

{#if state === 'signUp'}
	<h1>Sign up</h1>
	<form method="POST" action="?/signUp">
		<label for="email">Email</label>
		<input id="email" type="email" name="email" />

		<label for="password">Password</label>
		<input id="password" type="password" name="password" />

		<button type="submit">Sign up</button>
	</form>

	<button on:click={() => (state = 'signIn')}>Already have an account? Sign in</button>
{:else}
	<h1>Sign in</h1>
	<form method="POST" action="?/signIn">
		<label for="email">Email</label>
		<input id="email" type="email" name="email" />

		<label for="password">Password</label>
		<input id="password" type="password" name="password" />

		<button type="submit">Sign in</button>
	</form>

	<button on:click={() => (state = 'signUp')}>Don't have an account? Sign up</button>
{/if}
