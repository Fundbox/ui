import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxPanelRadioButton from './FbxPanelRadioButton.vue';
import summary from './FbxPanelRadioButton.md';

const stories = storiesOf('PanelRadioButton', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxPanelRadioButton },
  template: `<fbx-panel-radio-button
                name="my-panel-radio-button"
                tabindex="3"
                @click="click"
            >
              ${text('Text', 'Click me')}
            </fbx-panel-radio-button>`,
  methods: { click: action('clicked') },
})));
