# Svelte Body

Currently in Svelte Kit and Routify, applying styles per page to the body doesn't work. You can't use `:global(body)` since the style tags aren't removed and reapplied on route change. `svelte-body` handles that for you. It's available as an action or component.

# Install

```bash
npm i svelte-body -D
```

This library is made for Svelte 5, if you'd like to use Svelte 3/4 [checkout v1](https://www.npmjs.com/package/svelte-body/v/1.4.0).

# Usage

Just like in regular html you can apply classes with `class=""` and styles with `style=""`.

```svelte
<script>
	import { Body } from 'svelte-body';
</script>

<Body class="some classes" style="color: blue" />
```

Alternativley you can use a style object like so:

```svelte
<script>
	import { Body } from 'svelte-body';

	const style = {
		backgroundColor: 'violet',
		color: 'white',
		'--cool-css-prop': '😎',
	};
</script>

<Body {style} />
```

We use [clsx](https://github.com/lukeed/clsx) under the hood, which allows you to pass different shapes and only have truthy names applied as classes. Read me about it on their docs.

```svelte
<script>
	import { classList } from 'svelte-body';

	let isBlue = $state(true);
</script>

<Body class="red green blue" />
<Body class={{ red: true, blue: isBlue }} />
<Body class={['red', isBlue && 'blue']} />
<Body class={['red', { blue: isBlue }]} />
```

## Actions

We also provide a `classList` and `style` action, which can be used on `<svelte:body />` (or any other element).

-   `classList`

    ```svelte
    <script>
        import { classList } from 'svelte-body';
    </script>

    <svelte:body use:classList={"red green blue"} />
    <svelte:body use:classList={{ red: true, blue: isBlue }} />
    <svelte:body use:classList={['red', isBlue && 'blue']} />
    <svelte:body use:classList={[ 'red', { blue: isBlue } ]} />
    ```

-   `style`

    ```svelte
    <script>
    	import { style } from 'svelte-body';
    </script>

    <svelte:body use:style={'background-color: blue;'} />
    ```

    It can also take an object:

    ```svelte
    <script>
    	import { style } from 'svelte-body';
    </script>

    <svelte:body
    	use:style={{ backgroundColor: 'blue', '--cool-css-prop': '😎' }} />
    ```

# Migrating from v1 to v2

-   Svelte 5 is now required
-   We updated to [clsx v2](https://github.com/lukeed/clsx/releases/tag/v2.0.0)

[Read the full changelog](https://github.com/ghostdevv/svelte-body/releases/tag/v2.0.0).

# Support

-   Join the [discord](https://discord.gg/2Vd4wAjJnm)<br>
-   Create a issue on the [github](https://github.com/ghostdevv/svelte-body)
