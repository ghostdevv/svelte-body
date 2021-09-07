/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BodyProps {
  /**
   * A string of styles (style="" on a HTML element)
   */
  style?: string | CSSStyleDeclaration;

  /**
   * A string of class names (class="" on a HTML element)
   */
  class?: string;
}

export default class Body extends SvelteComponentTyped<BodyProps, {}, {}> {}
