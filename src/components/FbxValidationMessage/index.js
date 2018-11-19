import FbxValidationMessage from './FbxValidationMessage.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxValidationMessage
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
