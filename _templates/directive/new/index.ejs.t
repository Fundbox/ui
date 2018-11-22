---
to: src/directives/Fbx<%= name %>/index.js
---
import Fbx<%= name %> from './Fbx<%= name %>'
import { registerDirectives, vueUse } from '../../utils/plugins'

const directives = {
  Fbx<%= name %>
}

const VuePlugin = {
  install(Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
