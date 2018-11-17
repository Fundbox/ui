import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import FbxAutofocus from './FbxAutofocus';
import summary from './FbxAutofocus.md';

const stories = storiesOf('Directives/Autofocus', module);
const storyWithInfo = withInfo({ summary });

const defaultStory = () => ({
  directives: { FbxAutofocus },
  data() {
    return { value: '' };
  },
  template: `<input v-fbx-autofocus v-model="value" />`,
});

stories.add('default', storyWithInfo(defaultStory));
