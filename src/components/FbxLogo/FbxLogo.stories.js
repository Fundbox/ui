import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxLogo from './FbxLogo.vue'
import summary from './FbxLogo.md'

const stories = storiesOf('Components/FundboxLogo', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="background: #f0f2f2; padding: 50px;">
  <FbxLogo
    style="height: 50px; background: white; padding: 10px"
  ></FbxLogo>
</div>
`
})))

stories.add('Without text', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="background: #f0f2f2; padding: 50px;">
  <FbxLogo
    style="height: 50px; background: white; padding: 10px"
    :withText="false"
  ></FbxLogo>
</div>
`
})))


stories.add('Vertical', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="background: #f0f2f2; padding: 50px;">
  <FbxLogo
    style="height: 50px; background: white; padding: 10px"
    :vertical="true"
  ></FbxLogo>
</div>
`
})))
