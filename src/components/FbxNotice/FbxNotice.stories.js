import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxNotice from './FbxNotice.vue'
import summary from './FbxNotice.md'

const stories = storiesOf('Components/Notice', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxNotice },
  template: `<fbx-notice><div style="padding: 16px">lorem ipsum</div></fbx-notice>`
})))
