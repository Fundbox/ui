import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { array } from '@storybook/addon-knobs';

import FbxSelect from './FbxSelect.vue';
import summary from './FbxSelect.md';
const stories = storiesOf('Select', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxSelect },
  data() {
    return {
      selected: "",
      options: array('Options', ['Option 1', 'Option 2', 'Option 3', 'Option 4']),
    }
  },
  watch: {
    selected(value) {
      action(`New selected value: ${value}`)()
    },
  },
  template: `
  <div>
    <fbx-select v-model="selected">
      <option value="">Default</option>
      <option v-for="option in options" :value="option">{{ option }}</option>
    </fbx-select>
    <br>
    <h3>Selected option: {{selected}}</h3>
  </div>
  `,
})));
