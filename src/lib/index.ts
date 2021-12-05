export { default as Body } from './Body.svelte';
export { classList, style } from './actions';

declare module 'csstype' {
	interface Properties {
		// Add a CSS Custom Property
		[key: `--${string}`]: any;
	}
}
