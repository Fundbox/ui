import FbxTile from './FbxTile.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTile
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export * from './models/Tile'
