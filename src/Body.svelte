<script>
    import { classList, style as styleAction } from './actions';

    export let style;

    // Get around not being able to use class reserved word
    const classes = $$props?.class || '';
</script>

<!-- Use actions to avoid code duplication and make svelte-body more reactive -->
<svelte:body use:classList={classes} use:styleAction={style} />
