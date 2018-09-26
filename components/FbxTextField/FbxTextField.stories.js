import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { array } from '@storybook/addon-knobs';

import FbxTextField from './FbxTextField.vue';
import summary from './FbxTextField.md';
const stories = storiesOf('FbxTextField', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTextField },
  data() {
    return {
      // tabs: array('Tabs', ['Settings', 'Profile']),
    }
  },
  template: `<fbx-text-field />`,
  // methods: { onTabSelect: action('onTabSelect') },
})));
