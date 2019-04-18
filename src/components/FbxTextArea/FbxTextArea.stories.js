import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxTextArea from './FbxTextArea.vue'
import summary from './FbxTextArea.md'

const stories = storiesOf('Components/TextArea', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTextArea },
  template: `<fbx-text-area></fbx-text-area>`
})))
