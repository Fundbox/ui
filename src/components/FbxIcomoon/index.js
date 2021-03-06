import FbxIcomoon from './FbxIcomoon.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxIcomoon
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxIcomoon }
