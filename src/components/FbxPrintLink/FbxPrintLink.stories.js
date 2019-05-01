import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxPrintLink from './FbxPrintLink.vue'
import summary from './FbxPrintLink.md'

const stories = storiesOf('Components/PrintLink', module)

stories.add('default', withInfo({ summary })(() => ({
})))
