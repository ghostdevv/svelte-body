# Svelte Body
Apply styles to the body in routes! Designed to work with Svelte Kit and Routify.

### [Example REPL](https://svelte.dev/repl/7d04a8d3131c46b5b188744dc86c0fb5?version=3.42.4)

# Why?
Currently in Svelte Kit, Routify, applying styles per page to the body doesn't work. You can't use `:global (body)` since the style tags aren't removed and reapplied on route change. svelte-body handles that for you!

# Install
```bash
npm i svelte-body -D
```

# Applying Styles
You can use `style=""` like you would with any regular html element!

```svelte
<script>
    import { Body } from 'svelte-body';
</script>

<Body style="background-color: violet; color: white;" />
```

Alternativley you can use a style object like so:
```svelte
<script>
    import { Body } from 'svelte-body';

    const style = {
        "background-color": "violet", 
        "color": "white"
    }
</script>

<Body {style} />
```

# Applying classes
Just like in regular html you can apply classes with `class=""`
```svelte
<script>
    import { Body } from 'svelte-body';
</script>

<Body class="classOne classTwo etc" />
```