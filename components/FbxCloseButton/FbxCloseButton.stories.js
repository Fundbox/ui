import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';

import FbxCloseButton from './FbxCloseButton.vue';
import summary from './FbxCloseButton.md';

const stories = storiesOf('components/CloseButton', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxCloseButton },
  template: `<fbx-close-button
                data-qa="close-button"
                class="some-modal-close-button"
                @click="onClick"
              />`,
  methods: { onClick: action('clicked') },
})));
