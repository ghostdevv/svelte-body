import type { Properties } from 'csstype';

/**
 * All CSS properties (including css variables)
 */
export interface StyleProperties extends Properties {
	[key: `--${string}`]: any;
}
