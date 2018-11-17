import FbxTooltip from './FbxTooltip.vue';
import { registerComponents, vueUse } from '../../utils/plugins';

const components = {
  FbxTooltip
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
