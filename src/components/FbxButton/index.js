import FbxButton from './FbxButton.vue';
import { registerComponents, vueUse } from '../../utils/plugins';

const components = {
  FbxButton
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
