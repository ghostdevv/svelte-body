<script>
	import { Body, classList, style } from '$lib';

	let showing = false;

	let classes = 'teal';
	let styles = 'color: blue';
</script>

<button on:click={() => (showing = !showing)}> Toggle </button>

<p>
	Showing: {showing}
</p>

<input type="text" placeholder="classes" bind:value={classes} /><br />
<input type="text" placeholder="styles" bind:value={styles} />

<!-- Below is the actual code, above is boilerplate -->

<svelte:body use:classList={classes} use:style={styles} />

{#if showing}
	<!-- A example where style is a classic string -->
	<Body style="background-color: #f2f2f2;" />

	<!-- Style can also be an object of styles -->
	<Body style={{ color: 'violet' }} />

	<!-- If you had some global classes you can apply them! -->
	<Body class="classes go here" />
{/if}

<style>
	/* It's not recommended to do :global styles, do it in a global stylesheet instead */
	:global(.teal) {
		background-color: teal;
	}
</style>
