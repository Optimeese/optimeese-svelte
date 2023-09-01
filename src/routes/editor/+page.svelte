<script lang="ts">
	import { writable } from 'svelte/store'
	import ruler from '$lib/icons/ruler.svg?raw'
	import cursorarrow from '$lib/icons/cursorarrow.svg?raw'
	import skew from '$lib/icons/skew.svg?raw'
	import parkingsign from '$lib/icons/parkingsign.svg?raw'
	import cablecoaxial from '$lib/icons/cable.coaxial.svg?raw'

	// import type { PageData } from './$types'

	// export let data: PageData

	const selectables = [
		{ type: 'none' },
		{ type: 'background' },
		{ type: 'wall' },
		{ type: 'parking' },
		{ type: 'delivery-point' },
		{ type: 'charger' },
		{ type: 'cable' },
	]
	const selected = writable(selectables[0])

	const tools = [
		{
			type: 'mouse',
			icon: cursorarrow,
		},
		{
			type: 'wall',
			icon: skew
		},
		{
			type: 'parking',
			icon: parkingsign
		},
		{
			type: 'cable',
			icon: cablecoaxial
		},
	]
	const tool = writable(tools[0])

	$: showCableDialog = $tool.type === 'cable'
</script>

<div id="container" class="current_tool_{$tool.type}">
	<div id="plan">
		<img src="/demo_plan.jpg" alt="" draggable="true" />

		<div id="temp">
			<form>
				<legend>Simulate selecting an object of the following type</legend>
				<fieldset>
					{#each selectables as selectable}
						<input
							type="radio"
							name="selected"
							id="selected_{selectable.type}"
							value={selectable.type}
							bind:group={$selected.type}
						/>
						<label for="selected_{selectable.type}">{selectable.type}</label>
					{/each}
				</fieldset>
			</form>
		</div>
	</div>

	<div id="sidebar">
		<details>
			<summary>Help</summary>
			<section>Show context help here</section>
		</details>

		<details open>
			<summary>Properties <small>{$selected.type}</small></summary>
			<section>
				{#if $selected.type === 'none'}
					<p>You haven't selected anything.</p>
					
					<form>
						{@html ruler}
						<label for="plan_scale">Set the scale <abbr title="Meters">m</abbr></label>
						<input type="number" name="plan_scale" id="plan_scale" value="25">
					</form>
				{/if}
				{#if $selected.type === 'background'}
					<form>
						<label for="plan_background_image">Change plan image</label>
						<input type="file" name="plan_background_image" id="plan_background_image" />
					</form>
				{/if}
				{#if $selected.type === 'wall'}
					<form>
						<label for="wall_hole">Trou possible</label>
						<input type="checkbox" name="wall_hole" id="wall_hole" />
					</form>
				{/if}
				{#if $selected.type === 'parking'}
					<form>
						<legend>Dimensions</legend>
						<label for="parking_width">Largeur <abbr title="Meters">m</abbr></label>
						<input type="number" name="parking_width" id="parking_width" value="2.5" />
						<label for="parking_height">Largeur <abbr title="Meters">m</abbr></label>
						<input type="number" name="parking_height" id="parking_height" value="5" />
					</form>
				{/if}
				{#if $selected.type === 'delivery-point'}
					<form>
						<label for="delivery_point_power">Power <abbr title="Kilowatts">kw</abbr></label>
						<input type="number" name="delivery_point_power" id="delivery_point_power" value="11" />
					</form>
				{/if}
				{#if $selected.type === 'charger'}
					<form>
						<label for="charger_power">Power <abbr title="Kilowatts">kw</abbr></label>
						<input type="number" name="charger_power" id="charger_power" value="11" />
					</form>
				{/if}
				{#if $selected.type === 'cable'}
					<p>Section de câble:</p>
					<p><b>5g35</b></p>
					<p>Longueur:</p>
					<p><b>12.83m</b></p>
				{/if}
			</section>
		</details>

		<div class="grow"></div>
		
		<nav>
			<button>Save</button>
			<button>Export</button>
		</nav>
	</div>

	<dialog open={showCableDialog}>
		<h1>Cable path</h1>
		<p>Current distance: 127.3m</p>
		<button>Create cable path automatically</button>
	</dialog>

	<div id="toolbar">
		{#each tools as _tool}
			<input
				type="radio"
				name="selected"
				id="tool_{_tool.type}"
				value={_tool.type}
				bind:group={$tool.type}
			/>
			<label for="tool_{_tool.type}" title={_tool.type}>
				{@html _tool.icon}
				<!-- <span>
					{_tool.type}
				</span> -->
			</label>
		{/each}
	</div>
</div>

<style>
	#container {
		--color-lines: #dedede;
		--spacing: 1rem;
		position: relative;
		height: calc(100vh - 80px);
		display: grid;
		grid-template-columns: auto 25rem;
		align-items: center;
		justify-content: center;
	}

	#plan {
		max-height: 100%;
		display: grid;
		overflow: hidden;

		& img {
			position: relative;
			width: auto;
			height: auto;
			object-fit: contain;
		}
	}

	.current_tool_wall,
	.current_tool_parking {
		& #plan {
			cursor: copy;
		}
	}

	#sidebar {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		height: 100%;
		border-left: solid var(--color-lines) 1px;
		gap: var(--spacing);

		& > * {
			padding: var(--spacing);
		}

		&>*:not(:first-child) {
			border-top: solid var(--color-lines) 1px;
			/* padding-top: var(--spacing); */
		}
		
		& section {
			padding: var(--spacing);
		}

		& .grow {
			flex-grow: 1;
		}

		& > nav {
			justify-self: flex-end;
			display: flex;
			justify-content: center;
			gap: var(--spacing);
		}
	}

	#toolbar {
		display: grid;
		flex-direction: column;
		justify-content: center;
		position: fixed;
		justify-self: start;
		left: 0;
		align-self: center;
		margin: var(--spacing);
		border-radius: calc(var(--spacing) * 1);
		border: solid var(--color-lines) 1px;
		overflow: hidden;
		background-color: color-mix(in oklab, #000 5%, #fff);

		& > input {
			display: none;
		}

		& > input:checked + label {
			background-color: color-mix(in oklab, #000 10%, #fff);
		}
	}

	#toolbar label {
		display: grid;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		padding: calc(var(--spacing) * 0.5);
		outline: solid transparent 2px;
		cursor: pointer;

		&:not(:first-child) {
			border-top: solid var(--color-lines) 1px;
		}

		& svg {
			margin: auto;
			& * {
				fill: currentColor;
			}
		}
	}

	#temp {
		position: absolute;
		justify-self: center;
		align-self: center;
		background: #fffc;

		& fieldset {
			display: grid;
			grid-template-columns: min-content auto;
		}

		& label {
			text-transform: capitalize;
		}
	}
</style>
