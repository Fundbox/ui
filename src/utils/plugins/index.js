/**
 * Register a component plugin as being loaded. returns true if component plugin already registered
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */
export function registerComponent(Vue, name, def) {
  Vue.fundbox_ui_components = Vue.fundbox_ui_components || {}
  const loaded = Vue.fundbox_ui_components[name]
  if (!loaded && def && name) {
    Vue.fundbox_ui_components[name] = true
    Vue.component(name, def)
  }
  return loaded
}

/**
 * Register a group of components as being loaded.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */
export function registerComponents(Vue, components) {
  for (let component in components) {
    registerComponent(Vue, component, components[component])
  }
}

/**
 * Register a directive as being loaded. returns true if directive plugin already registered
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */
export function registerDirective(Vue, name, def) {
  Vue.fundbox_ui_directives = Vue.fundbox_ui_directives || {}
  const loaded = Vue.fundbox_ui_directives[name]
  if (!loaded && def && name) {
    Vue.fundbox_ui_directives[name] = true
    Vue.directive(name, def)
  }
  return loaded
}

/**
 * Register a group of directives as being loaded.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */
export function registerDirectives(Vue, directives) {
  for (let directive in directives) {
    registerDirective(Vue, directive, directives[directive])
  }
}

/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */
export function vueUse(VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin)
  }
}
