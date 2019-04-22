import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'

import FbxTextArea from './FbxTextArea.vue'
import summary from './FbxTextArea.md'

const stories = storiesOf('Components/TextArea', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTextArea },
  data() {
    return {
      inputText: '',
      inputText2: '',
      inputText3: '',
      inputText4: '',
    }
  },
  watch: {
    inputText(value) {
      action(`New value`)(value)
    },
    inputText2(value) {
      action(`New value`)(value)
    },
    inputText3(value) {
      action(`New value`)(value)
    },
    inputText4(value) {
      action(`New value`)(value)
    },
  },
  template: `
    <div style="width: 400px;">
      <fbx-text-area
        label="Basic usage"
        name="myTextArea"
        placeholder="Write something here"
        v-model="inputText"
      />
      <fbx-text-area
        label="With character count"
        name="myTextArea2"
        placeholder="Write something brief"
        :max-length="10"
        v-model="inputText2"
      />
      <fbx-text-area
        label="With resize vertical"
        name="myTextArea3"
        placeholder="Write something here"
        resize="vertical"
        v-model="inputText3"
      />
      <fbx-text-area
        label="With validation"
        validations="required"
        name="myTextArea4"
        placeholder="You must write something here"
        :max-length="30"
        v-model="inputText4"
      />
    </div>
  `
})))
