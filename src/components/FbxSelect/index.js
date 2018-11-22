import FbxSelect from './FbxSelect.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxSelect
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
