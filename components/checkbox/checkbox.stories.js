import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text, boolean } from '@storybook/addon-knobs';

import FbxCheckbox from './Checkbox';
import summary from './checkbox.md';

const stories = storiesOf('Checkbox', module);

stories.add('with text', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="foo"
                v-model="value"
              >${text('Text', 'Hello checkbox')}</fbx-checkbox>`,
  data () { return { value: true } },
  watch: {
    value: function (val) {
      action(`New value: ${val}`)()
    },
  }
})));

stories.add('with some emoji', () => ({
  components: { FbxCheckbox },
  template: '<fbx-checkbox @click="click">😀 😎 👍 💯</fbx-checkbox>',
  methods: { click: action('clicked') },
}));
