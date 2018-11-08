---
to: src/components/Fbx<%= name %>/index.js
---
import Vue from "vue";
import Fbx<%= name %> from "./Fbx<%= name %>.vue";
Vue.component(Fbx<%= name %>.name, Fbx<%= name %>);
export default Fbx<%= name %>;
