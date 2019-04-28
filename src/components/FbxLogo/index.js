import FbxLogo from './FbxLogo.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxLogo
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxLogo }
