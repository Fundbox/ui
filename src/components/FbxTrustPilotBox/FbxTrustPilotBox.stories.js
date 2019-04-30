import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxTrustPilotBox from './FbxTrustPilotBox.vue'
import summary from './FbxTrustPilotBox.md'

const stories = storiesOf('Components/TrustPilotBox', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTrustPilotBox },
  template: `<fbx-trust-pilot-box fallback-link="'https://www.trustpilot.com/review/fundbox.com'" template-id="'53aa8807dec7e10d38f59f32'" businessunit-id="'53b56ea200006400057906ac'" height="'80px'" width="'100px'" style="margin-right: 50px"></fbx-trust-pilot-box>`
})))
