import FbxTabs from './FbxTabs.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTabs
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
