import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typecript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`

export { name, file }
const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: [ 'node_modules']
}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typecript({ tsconfigOverride: overrides }),
    vue(),
    css({output: 'bundle.css'})
  ],
  external: ['vue', 'lodash-es']
}