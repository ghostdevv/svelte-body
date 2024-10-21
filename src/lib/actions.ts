import type { Properties as CSSProperties } from 'csstype';
import clsx, { type ClassValue } from 'clsx';
import type { Action } from 'svelte/action';

function clsxList(input: ClassValue) {
	return clsx(input).split(' ').filter(Boolean);
}

/**
 * Svelte action to change class on `body`
 *
 * You can pass a string or object, or an array of combination of these. Literally anything that [clsx](https://github.com/lukeed/clsx) accepts.
 *
 * @example
 *
 *```svelte
 * <script>
 *   import { classList } from 'svelte-body';
 *
 *   let isBlue = true;
 * </script>
 *
 * <svelte:body use:classList={"red green blue"} />
 * <svelte:body use:classList={{ red: true, blue: isBlue }} />
 * <svelte:body use:classList={['red', isBlue && 'blue']} />
 * <svelte:body use:classList={[ 'red', { blue: isBlue } ]} />
 *```
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
 * Svelte action to add style on `body`. style can either be a string or an object.
 *
 * @example
 *
 *```svelte
 * <script>
 *   import { style } from 'svelte-body';
 * </script>
 *
 * <svelte:body use:style={"background-color: blue;"} />
 * <svelte:body use:style={{ backgroundColor: 'blue' }} />
 *```
 */
export const style: Action<HTMLElement, CSSProperties | string> = (
	node: HTMLElement,
	styleData = {},
) => {
	// Pseudo Element for style parsing and keeping track of styles
	const pseudoElement = document.createElement('div');

	const update = (styleData: CSSProperties | string = {}) => {
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
		update: (styleData) => {
			unset();
			update(styleData);
		},
		destroy: unset,
	};
};
