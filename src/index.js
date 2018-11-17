import * as components from './components';
import * as directives from './directives';
import './validations';
import { vueUse } from './utils/plugins';

const VuePlugin = {
  install(Vue) {
    if (Vue.fundbox_ui_installed) {
      return;
    }

    Vue.fundbox_ui_installed = true;

    // Register component plugins
    for (let plugin in components) {
      Vue.use(components[plugin]);
    }

    // Register directive plugins
    for (let plugin in directives) {
      Vue.use(directives[plugin]);
    }
  }
};

vueUse(VuePlugin);

export default VuePlugin;
