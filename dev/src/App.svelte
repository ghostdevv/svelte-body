<script lang="ts">
    import { style, classList } from 'svelte-body';
</script>

<svelte:body
    use:style={{ color: 'blue', '--cool-css-prop': 'blue' }}
    use:classList={['hello', { blue: true }]} />
