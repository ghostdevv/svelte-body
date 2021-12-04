/// <reference types="svelte" />
import { Properties } from 'csstype';

declare module 'csstype' {
    interface Properties {
        // Add a CSS Custom Property
        [key: `--${string}`]: any;
    }
}

/**
 * Svelte action to change class on `body`
 *
 * @example
 *
 *```svelte
 * <script>
 *   import { classList } from 'svelte-body';
 * </script>
 *
 * <svelte:body use:classList={"red green blue"}>
 *```
 *
 * @param {HTMLElement} node
 * @param classString
 */
export function classList(
    node: HTMLElement,
    classString: string,
): { update: () => void; destroy: () => void };

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
 * <svelte:body use:style={"background-color: blue;"}>
 *```
 *
 * @example
 *
 *```svelte
 * <script>
 *   import { style } from 'svelte-body';
 * </script>
 *
 * <svelte:body use:style={{ backgroundColor: 'blue' }}>
 *```
 *
 * @param {HTMLElement} node
 * @param classString
 */
export function style(
    node: HTMLElement,
    styleData: string | Properties,
): { update: () => void; destroy: () => void };
