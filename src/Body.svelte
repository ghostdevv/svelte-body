<script>
    import { onMount } from 'svelte';

    export let style;

    // We can't use class as a prop directly sine it's a keyword in JS, so we do a work around and split it by a space since class names can't have a space in them
    const classes = ($$props?.class || '')
        .split(' ')
        .filter((x) => x.trim() != '');

    // Create pseudo html element, the parser for styles is amazing
    const pseudoElement = document.createElement('div');

    // Give the pseudo element our style string, it can handle this
    if (typeof style == 'string') pseudoElement.style = style;

    // For each property in the styles obect apply it to the elemnt
    if (typeof style == 'object')
        for (const [property, value] of Object.entries(styles))
            pseudoElement.style[property] = value;

    onMount(() => {
        // Combine the existing styles on the body and the computed style string on the pseudo element and apply to body
        document.body.style = `
					${document.body.style.cssText};
					${pseudoElement.style.cssText};
				`;

        // Apply given classes
        if (classes?.length) document.body.classList.add(...classes);

        return () => {
            // When the component is destroyed remove the styles that we applied on mount
            document.body.style = document.body.style.cssText.replace(
                pseudoElement.style.cssText,
            );

            // Remove classes
            if (classes?.length) document.body.classList.remove(...classes);
        };
    });
</script>
