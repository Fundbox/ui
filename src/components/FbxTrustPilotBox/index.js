import FbxTrustPilotBox from './FbxTrustPilotBox.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTrustPilotBox
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
