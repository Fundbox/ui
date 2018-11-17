import FbxPanelRadioButton from './FbxPanelRadioButton.vue';
import { registerComponents, vueUse } from '../../utils/plugins';

const components = {
  FbxPanelRadioButton
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
