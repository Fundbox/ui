import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text, boolean } from '@storybook/addon-knobs';

import FbxButton from './FbxButton.vue';
import summary from './FbxButton.md';

const stories = storiesOf('FbxButton', module);

stories.add('Default', withInfo({ summary })(() => ({
  components: { FbxButton },
  template: `<fbx-button
                @click="click"
                :loading="${boolean('Loading', false)}"
                ${boolean('Disabled', false) ? 'disabled' : ''}
              >${text('Text', 'Click me')}</fbx-button>`,
  methods: { click: action('clicked') },
})));

stories.add('with HTML attributes', () => ({
  components: { FbxButton },
  template: `<fbx-button
              name="fbx-button"
              id="my-id"
              data-qa="button-qa"
              tabindex="3"
            >Click me</fbx-button>`,
  methods: { click: action('clicked') },
}));
