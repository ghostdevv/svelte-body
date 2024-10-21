import clsx, { type ClassValue } from 'clsx';
import type { Action } from 'svelte/action';
import type { StyleProperties } from './types';

function clsxList(input: ClassValue) {
	return clsx(input).split(' ').filter(Boolean);
}

/**
 * Svelte action to change the class property on an element.
 *
 * We use [clsx](https://github.com/lukeed/clsx) under the hood,
 * which allows you to pass different shapes and only have truthy names
 * applied as classes. Read me about it on their docs.
 *
 * @example
 *
 * ```svelte
 * <script>
 *   import { classList } from 'svelte-body';
 *
 *   let isBlue = $state(true);
 * </script>
 *
 * <svelte:body use:classList={"red green blue"} />
 * <svelte:body use:classList={{ red: true, blue: isBlue }} />
 * <svelte:body use:classList={['red', isBlue && 'blue']} />
 * <svelte:body use:classList={[ 'red', { blue: isBlue } ]} />
 * ```
 */
export const classList: Action<HTMLElement, ClassValue> = (
	node: HTMLElement,
	input: ClassValue,
) => {
	let classes = clsxList(input);

	node.classList.add(...classes);

	return {
		update(input: ClassValue) {
			node.classList.remove(...classes);
			classes = clsxList(input);
			node.classList.add(...classes);
		},
		destroy() {
			node.classList.remove(...classes);
		},
	};
};

/**
 * Svelte action that changes the `style` property on an element.
 * Accepts both a string and style properties object.
 *
 * @example
 *
 * ```svelte
 * <script>
 *   import { style } from 'svelte-body';
 * </script>
 *
 * <svelte:body use:style={"background-color: blue;"} />
 * <svelte:body use:style={{ backgroundColor: 'blue' }} />
 * ```
 */
export const style: Action<HTMLElement, StyleProperties | string> = (
	node: HTMLElement,
	styleData: string | StyleProperties = {},
) => {
	// Pseudo Element for style parsing and keeping track of styles
	const pseudoElement = document.createElement('div');

	const update = (styleData: StyleProperties | string = {}) => {
		if (typeof styleData == 'string') {
			pseudoElement.style.cssText = styleData;
		}

		if (typeof styleData == 'object') {
			for (const [property, value] of Object.entries(styleData)) {
				// Do a setProperty in case it's a CSS variable
				if (property.startsWith('--')) {
					pseudoElement.style.setProperty(property, value);
				} else {
					pseudoElement.style[property] = value;
				}
			}
		}

		// Combine body's existing styles with computed ones
		node.style.cssText = `
					${node.style.cssText};
					${pseudoElement.style.cssText};
				`;
	};

	// Initial Update
	update(styleData);

	const unset = () => {
		// Remove the pseudoElements styles on the body
		node.style.cssText = node.style.cssText.replace(
			pseudoElement.style.cssText,
			'',
		);

		// Clear pseudoElement
		pseudoElement.style.cssText = '';
	};

	return {
		update: (styleData: string | StyleProperties) => {
			unset();
			update(styleData);
		},
		destroy: unset,
	};
};
