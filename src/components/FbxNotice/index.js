import FbxNotice from './FbxNotice.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxNotice
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
