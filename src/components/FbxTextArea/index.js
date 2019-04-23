import FbxTextArea from './FbxTextArea.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTextArea
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
