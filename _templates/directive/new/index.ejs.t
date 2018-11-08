---
to: src/directives/Fbx<%= name %>/index.js
---
import Vue from "vue";
import Fbx<%= name %> from "./Fbx<%= name %>.js";
Vue.directive(Fbx<%= name %>.name, Fbx<%= name %>);
export default Fbx<%= name %>;
