import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'
import { text } from '@storybook/addon-knobs'

import FbxTextField from './FbxTextField.vue'
import summary from './FbxTextField.md'
const stories = storiesOf('Components/TextField', module)
const withSummary = withInfo({ summary })

const defaultStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      labelText: text('Label', 'Email Address'),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `
    <fbx-text-field
      name="email"
      class="input"
      validations="required"
      placeholder="Enter your email"
      :label="labelText"
      v-model="inputText"
    />
  `,
})

const passwordStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      labelText: text('Label', 'Password'),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `
    <div style="width: 300px; padding: 30px;">
      <fbx-text-field
        name="password"
        type="password"
        class="input"
        validations="required"
        placeholder="Enter your password"
        :label="labelText"
        v-model="inputText"
      />
    </div>
  `,
})

const maskStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      labelText: text('Label', 'Email Address'),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `
    <fbx-text-field
      mask="(###) ###-####"
      name="phone"
      class="input"
      validations="required"
      placeholder="Enter your phone number"
      :label="labelText"
      v-model="inputText"
    />
  `
})

const autofocusStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      labelText: text('Label', 'Email Address'),
    }
  },
  watch: {
    inputText(value) {
      action(`New value: ${value}`)()
    },
  },
  template: `
    <fbx-text-field
      autofocus
      name="phone"
      class="input"
      validations="required"
      placeholder="Enter your phone number"
      :label="labelText"
      v-model="inputText"
    />
  `
})

const addressAutocompleteStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      addressData: {}
    }
  },
  methods: {
    onAddressDataChanged(addressData) {
      this.addressData = addressData
    }
  },
  watch: {
    inputText(value) {
      action(`New value`)(value)
    },
    addressData(value) {
      action(`Address data`)(value)
    }
  },
  template: `
    <fbx-text-field
      address-autocomplete
      :validations="{
        addressRequired: addressData,
        addressInsideUSA: addressData,
        fullAddress: addressData
      }"
      name="phone"
      class="input"
      placeholder="Enter your address"
      v-model="inputText"
      @addressDataChanged="onAddressDataChanged"
    />
  `
})

const clearableStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
    }
  },
  watch: {
    inputText(value) {
      action(`New value`)(value)
    },
  },
  template: `
    <div style="width: 300px;">
      <fbx-text-field
        name="search"
        class="input"
        placeholder="Enter your search"
        v-model="inputText"
        clearable
      />
    </div>
  `,
})

stories.add('default', withSummary(defaultStory))
stories.add('password', withSummary(passwordStory))
stories.add('mask', withSummary(maskStory))
stories.add('autofocus', withSummary(autofocusStory))
stories.add('address autocomplete', withSummary(addressAutocompleteStory))
stories.add('clearable', withSummary(clearableStory))
