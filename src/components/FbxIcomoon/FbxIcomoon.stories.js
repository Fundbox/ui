import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxIcomoon from './FbxIcomoon.vue'
import summary from './FbxIcomoon.md'

const stories = storiesOf('Components/Icomoon', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxIcomoon },
  template: `<fbx-icomoon name="lock"></fbx-icomoon>`
})))

stories.add('with background styles', withInfo({ summary })(() => ({
  components: { FbxIcomoon },
  template: `<fbx-icomoon name="lock" background="#858585" color="white" round></fbx-icomoon>`
})))

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxIcomoon },
  template: `<fbx-icomoon name="lock"></fbx-icomoon>`
})))
