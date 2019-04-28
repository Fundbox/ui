import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxLogo from './FbxLogo.vue'
import summary from './FbxLogo.md'

const stories = storiesOf('Components/FundboxLogo', module)


const wrapperStyle = 'background: #f0f2f2; padding: 50px;'
const logoStyle = 'height: 100px; background: white; padding: 20px;'

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="${wrapperStyle}">
  <FbxLogo style="${logoStyle}"></FbxLogo>
</div>
`
})))

stories.add('Without text', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="${wrapperStyle}">
  <FbxLogo style="${ logoStyle }" withoutText></FbxLogo>
</div>
`
})))

stories.add('Vertical', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="${ wrapperStyle }">
  <FbxLogo style="${ logoStyle }" vertical></FbxLogo>
</div>
`
})))

stories.add('Pay Logo', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="${ wrapperStyle }">
  <FbxLogo style="${ logoStyle }" payLogo></FbxLogo>
</div>
`
})))

stories.add('Vertical Pay Logo', withInfo({ summary })(() => ({
  components: { FbxLogo },
  template: `
<div style="${ wrapperStyle }">
  <FbxLogo style="${ logoStyle }" payLogo vertical></FbxLogo>
</div>
`
})))
