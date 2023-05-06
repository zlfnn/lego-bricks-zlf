import { App } from 'vue'
import LImage from './LImage.vue'
// LImage.install = (app: App) => {
//   app.component(LImage.name, LImage)
// }

export default {
  name: LImage.name,
  install: (app: App) => {
    app.component(LImage.name, LImage)
  }
}