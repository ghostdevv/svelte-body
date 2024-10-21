<script lang="ts">
	import { classList, style as styleAction } from './actions';
	import type { StyleProperties } from './types';
	import type { ClassValue } from 'clsx';

	interface Props {
		/**
		 * Applies the given classes on the body.
		 *
		 * We use [clsx](https://github.com/lukeed/clsx) under the hood,
		 * which allows you to pass different shapes and only have truthy names
		 * applied as classes. Read me about it on their docs.
		 *
		 * @example
		 *
		 * ```svelte
		 * <Body class="red green blue" />
		 * <Body class={{ red: true, blue: isBlue }} />
		 * <Body class={['red', isBlue && 'blue']} />
		 * <Body class={[ 'red', { blue: isBlue } ]} />
		 * ```
		 */
		class?: ClassValue;

		/**
		 * Svelte action that changes the `style` property on the body.
		 * Accepts both a string and style properties object.
		 *
		 * @example
		 *```svelte
		 * <Body style={"background-color: blue;"} />
		 * <Body style={{ backgroundColor: 'blue' }} />
		 * ```
		 */
		style?: string | StyleProperties;
	}

	const { class: classes = '', style = {} }: Props = $props();
</script>

<!-- Use actions to avoid code duplication and make svelte-body more reactive -->
<svelte:body use:classList={classes} use:styleAction={style} />
