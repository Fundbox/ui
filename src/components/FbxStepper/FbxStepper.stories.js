import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxStepper from './FbxStepper.vue'
import summary from './FbxStepper.md'

const stories = storiesOf('Components/Stepper', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxStepper },
  data() {
    return {
      steps: ['step one', 'step two', 'step three'],
    }
  },
  template: `<fbx-stepper :steps="steps" :active-step="1"></fbx-stepper>`
})))
