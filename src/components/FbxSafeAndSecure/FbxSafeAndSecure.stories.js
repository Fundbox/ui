import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxSafeAndSecure from './FbxSafeAndSecure.vue'
import summary from './FbxSafeAndSecure.md'

const stories = storiesOf('Components/SafeAndSecure', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxSafeAndSecure },
  template: `<fbx-safe-and-secure></fbx-safe-and-secure>`
})))
