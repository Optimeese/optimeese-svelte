<script lang="ts">
	import { writable, type Writable } from 'svelte/store'
	import ruler from '$lib/icons/ruler.svg?raw'
	import cursorarrow from '$lib/icons/cursorarrow.svg?raw'
	import skew from '$lib/icons/skew.svg?raw'
	import parkingsign from '$lib/icons/parkingsign.svg?raw'
	import mappinandellipse from '$lib/icons/mappin.and.ellipse.svg?raw'
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
			title: 'Select',
			shortcut: { code: 'KeyV' },
			icon: cursorarrow,
		},
		{
			type: 'wall',
			title: 'Wall',
			shortcut: { code: 'KeyW' },
			icon: skew,
		},
		{
			type: 'parking',
			title: 'Parking',
			shortcut: { code: 'KeyP' },
			icon: parkingsign,
		},
		{
			type: 'pin',
			title: 'Add a pin',
			icon: mappinandellipse,
		},
		{
			type: 'cable',
			title: 'Cable path',
			icon: cablecoaxial,
		},
	]
	const tool = writable(tools[0])

	let helpRef: HTMLDetailsElement

	const keyboardEvent: Writable<null | {
		altKey: boolean
		code: string
		composed: boolean
		ctrlKey: boolean
		key: string
		metaKey: boolean
		shiftKey: boolean
	}> = writable(null)

	function onKeyDown(event: KeyboardEvent) {
		if (event.isTrusted && event.currentTarget == event.target) {
			const { altKey, code, composed, ctrlKey, key, metaKey, shiftKey } = event
			keyboardEvent.set({ altKey, code, composed, ctrlKey, key, metaKey, shiftKey })

			if (code === 'KeyH') helpRef.open = true

			let matchingTool = tools.find((tool) => tool.shortcut?.code === event.code)

			if (matchingTool) tool.set(matchingTool)
		}
	}

	function onKeyUp() {
		keyboardEvent.set(null)
	}

	$: showCableDialog = $tool.type === 'cable'

	const scales = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const scale = writable(1)

	function zoomIn() {
		const index = scales.findIndex((s) => s === $scale)
		scale.set(scales[index + 1] || scales[index])
	}

	function zoomOut() {
		const index = scales.findIndex((s) => s === $scale)
		scale.set(scales[index - 1] || scales[index])
	}
</script>

<svelte:body on:keypress={onKeyDown} on:keyup={onKeyUp} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="container" class="current_tool_{$tool.type}">
	<div id="plan">
		<img src="/demo_plan.jpg" alt="" draggable="true" style="scale: {$scale};" />

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
							bind:group={$selected.type} />
						<label for="selected_{selectable.type}">{selectable.type}</label>
					{/each}
				</fieldset>
			</form>
		</div>

		<div id="zoom">
			<button on:click={zoomOut}>-</button>
			<button on:click={() => scale.set(1)}>{$scale * 100}%</button>
			<button on:click={zoomIn}>+</button>
		</div>

		<dialog open={showCableDialog}>
			<h1>Cable path</h1>
			<p>Current distance: 127.3m</p>
			<button>Create cable path automatically</button>
		</dialog>
	</div>

	<div id="sidebar">
		<details bind:this={helpRef}>
			<summary>Help <kbd>H</kbd></summary>
			<section>
				<p>Show context help here</p>
				{#if $selected.type !== 'none'}
					<p>Example: What is a {$selected.type}?</p>
				{/if}
			</section>
		</details>

		<details open>
			<summary>Properties <small>{$selected.type}</small></summary>
			<section>
				{#if $selected.type === 'none'}
					<p>You haven't selected anything.</p>

					<form>
						{@html ruler}
						<label for="plan_scale">Set the scale <abbr title="Meters">m</abbr></label>
						<input type="number" name="plan_scale" id="plan_scale" value="25" />
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

		<div class="grow" />

		<nav>
			<button>Save</button>
			<button disabled>Export</button>
		</nav>
	</div>

	<div id="toolbar">
		{#each tools as _tool}
			<input
				type="radio"
				name="selected"
				id="tool_{_tool.type}"
				value={_tool.type}
				bind:group={$tool.type} />
			<label
				for="tool_{_tool.type}"
				title="{_tool.title}{_tool.shortcut
					? _tool.shortcut?.code.replace('Key', ' (') + ')'
					: ''}">
				{@html _tool.icon}
				{#if $keyboardEvent?.code === 'KeyH'}
					<span>
						{_tool.title}{#if _tool.shortcut}<kbd>{_tool.shortcut.code.replace('Key', '')}</kbd
							>{/if}
					</span>
				{/if}
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
		position: relative;

		& img {
			position: relative;
			width: auto;
			height: auto;
			object-fit: contain;
		}
	}

	.current_tool_wall,
	.current_tool_parking,
	.current_tool_pin {
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

		& > *:not(:first-child) {
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

	#toolbar,
	#zoom {
		display: grid;
		flex-direction: column;
		justify-content: center;
		position: absolute;
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

		& > :is(label, button) {
			display: grid;
			justify-content: center;
			align-items: center;
			width: 3rem;
			height: 3rem;
			padding: calc(var(--spacing) * 0.5);
			outline: solid transparent 2px;
			cursor: pointer;
			border: 0;
			outline: 0;

			& svg {
				margin: auto;
			}
		}
	}

	#toolbar > label:not(:first-child) {
		border-top: solid var(--color-lines) 1px;
	}
	#zoom > button:not(:first-child) {
		border-left: solid var(--color-lines) 1px;
	}

	#zoom {
		left: unset;
		right: 0;
		bottom: 0;
		grid-template-columns: max-content auto max-content;
	}

	dialog {
		box-sizing: border-box;
		width: calc(100% - var(--spacing) * 6);
		height: calc(100% - var(--spacing) * 2);
		margin: 0 0 0 calc(var(--spacing) * 6);
		padding: 0;
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
