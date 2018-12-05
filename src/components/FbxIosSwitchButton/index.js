import FbxIosSwitchButton from './FbxIosSwitchButton.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxIosSwitchButton
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
