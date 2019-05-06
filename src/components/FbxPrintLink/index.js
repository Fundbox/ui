import FbxPrintLink from './FbxPrintLink.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxPrintLink,
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxPrintLink }
