import FbxCloseButton from './FbxCloseButton.vue';
import { registerComponents, vueUse } from '../../utils/plugins';

const components = {
  FbxCloseButton
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
