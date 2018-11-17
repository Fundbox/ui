---
to: src/components/Fbx<%= name %>/index.js
---
import Fbx<%= name %> from './Fbx<%= name %>.vue';
import { registerComponents, vueUse } from '../../utils/plugins';

const components = {
  Fbx<%= name %>
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
