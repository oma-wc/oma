import configure from '../../rollup.config'
import { dependencies } from './package.json'

export default configure({
  input: './src/oma-site.js',
  dependencies,
})
