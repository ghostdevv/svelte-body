# Svelte Body
Apply styles to the body in routes! Designed to work with Svelte Kit and Routify.

### [Example REPL](https://svelte.dev/repl/7d04a8d3131c46b5b188744dc86c0fb5?version=3.42.4)

# Why?
Currently in Svelte Kit and Routify, applying styles per page to the body doesn't work. You can't use `:global(body)` since the style tags aren't removed and reapplied on route change. `svelte-body` handles that for you!

# Install
```bash
npm i svelte-body -D
```

# Usage
Just like in regular html you can apply classes with `class=""` and styles with `style=""`.
```html
<script>
    import { Body } from 'svelte-body';
</script>

<Body class="some classes" style="color: blue" />
```

Alternativley you can use a style object like so:
```html
<script>
    import { Body } from 'svelte-body';

    const style = {
        "background-color": "violet", 
        "color": "white"
    }
</script>

<Body {style} />
```

# Actions
There are also [svelte actions](https://svelte.dev/docs#use_action) that can be used on `<svelte:body />`:

- `classList`
    ```html
    <script>
        import { classList } from 'svelte-body';
    </script>

    <svelte:body use:classList={"red green blue"}>
    ```

- `style`
    ```html
    <script>
        import { style } from 'svelte-body';
    </script>

    <svelte:body use:style={"background-color: blue;"}>
    ```

# Support
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)<br>
-   Create a issue on the [github](https://github.com/ghostdevv/svelte-body)
