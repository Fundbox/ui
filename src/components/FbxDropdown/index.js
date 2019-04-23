import FbxDropdown from './FbxDropdown.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxDropdown
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
