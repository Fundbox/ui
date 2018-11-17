import FbxAddressAutocomplete from './FbxAddressAutocomplete';
import { registerDirectives, vueUse } from '../../utils/plugins';

const directives = {
  FbxAddressAutocomplete
};

const VuePlugin = {
  install(Vue) {
    registerDirectives(Vue, directives);
  }
};

vueUse(VuePlugin);

export default VuePlugin;
