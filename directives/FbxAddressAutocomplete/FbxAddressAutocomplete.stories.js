import '../FbxAddressAutocomplete';
import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import FbxTextField from '../../components/FbxTextField';
import summary from './FbxAddressAutocomplete.md';

const stories = storiesOf('directives/Address Autocomplete', module);
const storyWithInfo = withInfo({ summary });

const defaultStory = () => ({
  data() {
    return { value: "" };
  },
  template: `<input v-fbx-address-autocomplete v-model="value" />`,
});

const fbxTextFieldStory = () => ({
  components: { FbxTextField },
  template: `<fbx-text-field address-autocomplete />`,
});

stories.add('default', storyWithInfo(defaultStory));
stories.add('fbxTextField autocomplete', storyWithInfo(fbxTextFieldStory));
