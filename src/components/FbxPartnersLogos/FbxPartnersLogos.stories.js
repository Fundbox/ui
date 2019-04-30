import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxPartnersLogos from './FbxPartnersLogos.vue'
import summary from './FbxPartnersLogos.md'

const stories = storiesOf('Components/PartnersLogos', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxPartnersLogos },
  template: `<fbx-partners-logos></fbx-partners-logos>`
})))
