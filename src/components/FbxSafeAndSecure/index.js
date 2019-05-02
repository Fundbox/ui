import FbxSafeAndSecure from './FbxSafeAndSecure.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxSafeAndSecure
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxSafeAndSecure }
