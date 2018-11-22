import FbxAutofocus from './FbxAutofocus'
import { registerDirectives, vueUse } from '../../utils/plugins'

const directives = {
  FbxAutofocus
}

const VuePlugin = {
  install(Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
