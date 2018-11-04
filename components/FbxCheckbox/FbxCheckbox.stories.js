import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxCheckbox from './FbxCheckbox.vue';
import summary from './FbxCheckbox.md';

const stories = storiesOf('components/Checkbox', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="fbx-checkbox"
                id="my-id"
                data-qa="checkbox-qa"
                tabindex="1"
                v-model="value"
              >${text('Text', 'Toggle me')}</fbx-checkbox>`,
  data () { return { value: true } },
  watch: {
    value (val) {
      action(`New value: ${val}`)()
    },
  }
})));

stories.add('with long, wrapping text', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<div style="width: 300px; fontSize: 14px; fontWeight: 300;">
              <fbx-checkbox
                name="fbx-checkbox"
                v-model="value"
                validations="required"
              >
                ${text('Text', 'Tiramisu licorice sugar brownie halvah tart caramels. candy chupa chups caramels marzipan. candy canes.')}
              </fbx-checkbox>
            </div>`,
  data () { return { value: true } },
  watch: {
    value: function (val) {
      action(`New value: ${val}`)()
    },
  }
})));

stories.add('with validation', withInfo({ summary })(() => ({
  components: { FbxCheckbox },
  template: `<fbx-checkbox
                name="fbx-checkbox"
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
                name="fbx-checkbox"
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
