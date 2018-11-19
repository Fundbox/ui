import FbxTextField from './FbxTextField.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTextField
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
