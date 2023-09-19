import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
    input: 'push.js',
    plugins: [commonjs(), resolve()],
    output: [
        {
            file: '.github/script/push.js',
            format: 'cjs',
        },
        {
            file: '.github/script/push.min.js',
            format: 'cjs',
            plugins: [terser()],
        },
    ],
})
