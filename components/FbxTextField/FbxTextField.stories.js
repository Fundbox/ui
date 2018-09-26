import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxTextField from './FbxTextField.vue';
import summary from './FbxTextField.md';
const stories = storiesOf('FbxTextField', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Email Address"),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `<fbx-text-field
              name="email"
              class="input"
              validations="required"
              placeholder="Enter your email"
              :label="labelText"
              v-model="inputText"
            />`,
})));

stories.add('password', withInfo({ summary })(() => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Password"),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `<fbx-text-field
              name="password"
              type="password"
              class="input"
              validations="required"
              placeholder="Enter your password"
              :label="labelText"
              v-model="inputText"
            />`,
})));
