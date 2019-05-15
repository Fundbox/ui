import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxDialog from './FbxDialog.vue'
import summary from './FbxDialog.md'

const stories = storiesOf('Components/Dialog', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxDialog },
  template: `<fbx-dialog></fbx-dialog>`
})))
