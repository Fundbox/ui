import FbxCheckbox from './FbxCheckbox.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxCheckbox
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
