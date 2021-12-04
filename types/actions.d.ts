/// <reference types="svelte" />
import { Properties } from 'csstype';

// Copied from `clsx` to remove it from dependencies
export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;

export interface ClassDictionary {
    [id: string]: any;
}

export interface ClassArray extends Array<ClassValue> {}

declare module 'csstype' {
    interface Properties {
        // Add a CSS Custom Property
        [key: `--${string}`]: any;
    }
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
 * </script>
 *
 * <svelte:body use:classList={"red green blue"}>
 *```
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
 * <svelte:body use:classList={{ red: true, blue: isBlue }}>
 *```
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
 * <svelte:body use:classList={['red', isBlue && 'blue']}>
 *```
 *
 * @example
 *
 * ```svelte
 * <script>
 *  import { classList } from 'svelte-body';
 * </script>
 *
 * <svelte:body use:classList={[ 'red', { blue: isBlue } ]}>
 *```
 *
 * @param {HTMLElement} node
 * @param classString
 */
export function classList(
    node: HTMLElement,
    classString: ClassValue,
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
