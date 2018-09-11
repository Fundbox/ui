import Vue from "vue";

const requireComponents = require.context("./components", true, /.+\.vue$/);

requireComponents.keys().map(filename => {
  const componentDefinition = requireComponents(filename);
  const componentConfig = componentDefinition.default || componentDefinition;
  const componentName = componentConfig.name;
  Vue.component(componentName, componentConfig);
});
