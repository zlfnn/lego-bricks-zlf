import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
// 会自动读取tsconfig.json
import typecript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
/* eslint-disable */
// const { name } = require('../package.json');
/* eslint-enable */
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
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
    nodeResolve(), // 把第三方库也打包进来
    typecript({ tsconfigOverride: overrides }),
    vue(),
    css({output: 'bundle.css'})
  ],
  external: ['vue', 'lodash-es']
  // external: (id) => {
  //   // 返回true 会被省略
  //   return /^vue/.test(id)
  // }
}