import { App } from 'vue'
import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'

export { textDefaultProps , textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps,
  AllComponentProps
} from './defaultProps'

const components = [
  LText,
  LImage,
  LShape
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 这是测试页面
export {
  LText,
  LImage,
  LShape,
  install
}

export default {
  install
}
