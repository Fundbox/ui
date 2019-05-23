import FbxStepper from './FbxStepper.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxStepper
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export { FbxStepper }
