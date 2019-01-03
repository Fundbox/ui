import FbxTileGrid from './FbxTileGrid.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  FbxTileGrid
}

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
export * from '../FbxTile/models/Tile'
