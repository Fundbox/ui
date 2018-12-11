import Vue from 'vue'
import VModal from 'vue-js-modal'

import FbxModalWrapper from './FbxModalWrapper.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxModalWrapper
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

vueUse(VuePlugin)

export default VuePlugin
