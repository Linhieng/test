import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
    input: 'push.js',
    plugins: [commonjs(), resolve()],
    output:[
        {
            file: 'dist.js',
            format: 'cjs',
        },
        {
            file: 'dist.min.js',
            format: 'cjs',
            plugins: [terser()],
        },
    ]
})