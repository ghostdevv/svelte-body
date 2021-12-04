/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';
import { Properties } from 'csstype';

export interface BodyProps {
    /**
     * A string of styles (style="" on a HTML element)
     */
    style?: string | Properties;

    /**
     * A string of class names (class="" on a HTML element)
     */
    class?: string;
}

export default class Body extends SvelteComponentTyped<BodyProps, {}, {}> {}
