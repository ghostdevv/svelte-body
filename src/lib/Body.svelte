<script lang="ts">
    import type { ClassValue } from 'clsx';
    import { classList, style as styleAction } from './actions';
    import type { Properties as CSSProperties } from 'csstype';

    let classes: string | ClassValue = '';

    /**
     * Svelte action to change class on `body`
     *
     * You can pass a string or object, or an array of combination of these. Literally anything that [clsx](https://github.com/lukeed/clsx) accepts.
     */
    export { classes as class };

    /**
     * Svelte action to add style on `body`. style can either be a string or an object.
     */
    export let style: CSSProperties | string = '';
</script>

<!-- Use actions to avoid code duplication and make svelte-body more reactive -->
<svelte:body use:classList={classes} use:styleAction={style} />
