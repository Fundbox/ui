import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxTile from './FbxTile.vue'
import summary from './FbxTile.md'

const stories = storiesOf('Components/Tile', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTile },
  template: `<fbx-tile></fbx-tile>`
})))
