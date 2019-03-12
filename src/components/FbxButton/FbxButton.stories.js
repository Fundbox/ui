import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import FbxButton from './FbxButton.vue'
import summary from './FbxButton.md'

const stories = storiesOf('Components/Button', module)

stories.addDecorator(withKnobs).add(
  'default',
  withInfo({ summary })(() => ({
    components: { FbxButton },
    props: {
      loading: {
        default: boolean('Loading', false)
      },
      inverse: {
        default: boolean('Inverse', false)
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      text: {
        default: text('Text', 'Click me')
      }
    },
    template: `<fbx-button
                name="fbx-button"
                id="my-id"
                data-qa="button-qa"
                tabindex="3"
                @click="click"
                :loading="loading"
                :inverse="inverse"
                :disabled="disabled"
            >
              {{text}}
            </fbx-button>`,
    methods: { click: action('clicked') }
  }))
)
