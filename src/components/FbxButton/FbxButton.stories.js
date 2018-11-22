import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'
import { text, boolean } from '@storybook/addon-knobs'

import FbxButton from './FbxButton.vue'
import summary from './FbxButton.md'

const stories = storiesOf('Components/Button', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxButton },
  template: `<fbx-button
                name="fbx-button"
                id="my-id"
                data-qa="button-qa"
                tabindex="3"
                @click="click"
                :loading="${boolean('Loading', false)}"
                :inverse="${boolean('Inverse', false)}"
                :disabled="${boolean('Disabled', false)}"
            >
              ${text('Text', 'Click me')}
            </fbx-button>`,
  methods: { click: action('clicked') },
})))
