import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name: 'svelte-body' },
    ],
    plugins: [
        svelte({ emitCss: false }),
        resolve(),
        commonjs(),
        copy({
            targets: [{ src: './types/*', dest: './dist' }],
        }),
    ],
};
