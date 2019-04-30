import FbxPartnersLogos from './FbxPartnersLogos.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxPartnersLogos
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
