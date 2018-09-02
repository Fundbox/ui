import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxCheckbox from './Checkbox';
import summary from './checkbox.md';

const stories = storiesOf('Checkbox', module);

stories.add('simple', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="foo"
                v-model="value"
              >${text('Text', 'Simple checkbox usage')}</fbx-checkbox>`,
  data () { return { value: true } },
  watch: {
    value (val) {
      action(`New value: ${val}`)()
    },
  }
})));

stories.add('with validation', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="foo"
                v-model="value"
                validations="required"
              >${text('Text', 'Checkbox with required validation')}</fbx-checkbox>`,
  data () { return { value: true } },
  watch: {
    value: function (val) {
      action(`New value: ${val}`)()
    },
  }
})));

stories.add('with events', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="foo"
                v-model="value"
                @click="onClick"
                @change="onChange"
              >${text('Text', 'Checkbox with event handlers')}</fbx-checkbox>`,
  data () { return { value: true } },
  methods: {
    onClick: action('Checkbox click handler'),
    onChange: action('Checkbox change handler'),
  }
})));
