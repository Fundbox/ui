import FbxModalWrapper from './FbxModalWrapper.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxModalWrapper
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
