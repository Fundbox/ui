import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxIosSwitchButton from './FbxIosSwitchButton.vue'
import summary from './FbxIosSwitchButton.md'
// import {action} from "@storybook/addon-actions/src/index";

const stories = storiesOf('Components/IosSwitchButton', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxIosSwitchButton },
  data() { return { value: true, debounceDisabled: true } },
  watch: {
    value(val) {
      console.log(`New value: ${val}`);
    },
  },
  template: `<fbx-ios-switch-button debounceDisabled="debounceDisabled" v-model="value"></fbx-ios-switch-button>`
})))
