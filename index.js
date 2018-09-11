const requireComponents = require.context("./components", true, /.+\.vue$/);

export const componentConfigs = requireComponents.keys().map(filename => {
  const componentDefinition = requireComponents(filename);
  return componentDefinition.default || componentDefinition;
});
