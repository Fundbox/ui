import FbxDialog from './FbxDialog.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxDialog,
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  },
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxDialog }
