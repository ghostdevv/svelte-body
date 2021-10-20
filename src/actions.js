import { writable, get } from 'svelte/store';

export const classList = (node, classString = '') => {
    const classes = writable(classString.split(' ').filter(Boolean));

    // When the classes store changes add the new classes
    const unsubscribe = classes.subscribe((list) => {
        if (Array.isArray(list) && list?.length) node.classList.add(...list);
    });

    // Remove all classes that we added
    const unset = () => node.classList.remove(...get(classes));

    return {
        update: (classString) => {
            unset();
            classes.set(classString.split(' ').filter(Boolean));
        },

        destroy: () => {
            unset();
            unsubscribe();
        },
    };
};

export const style = (node, styleData = {}) => {
    // Pseudo Element for style parsing and keeping track of styles
    const pseudoElement = document.createElement('div');

    const update = (styleData = {}) => {
        if (typeof styleData == 'string') pseudoElement.style = styleData;

        if (typeof styleData == 'object')
            for (const [property, value] of Object.entries(styleData))
                pseudoElement.style[property] = value;

        // Combine body's existing styles with computed ones
        node.style = `
					${node.style.cssText};
					${pseudoElement.style.cssText};
				`;
    };

    // Initial Update
    update(styleData);

    const unset = () => {
        // Remove the pseudoElements styles on the body
        node.style = node.style.cssText.replace(
            pseudoElement.style.cssText,
            '',
        );

        // Clear pseudoElement
        pseudoElement.style = '';
    };

    return {
        update: (styleData) => {
            unset();
            update(styleData);
        },

        destroy: () => {
            unset();
            unsubscribe();
        },
    };
};
