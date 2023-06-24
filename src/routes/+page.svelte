<script lang="ts">
    import Body from '$lib/Body.svelte';
</script>

<Body
    style={{ '--hello': 'world', '--nice': 'work' }}
    class={{ hello: true }} />
