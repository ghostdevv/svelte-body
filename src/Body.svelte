<script>
    import { classList, style as styleAction } from './actions';

    let classes = '';
    export { classes as class };

    export let style;
</script>

<!-- Use actions to avoid code duplication and make svelte-body more reactive -->
<svelte:body use:classList={classes} use:styleAction={style} />
