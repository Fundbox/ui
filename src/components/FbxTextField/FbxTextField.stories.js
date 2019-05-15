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
      validations="required|email"
      placeholder="Enter your email"
      :label="labelText"
      :data-qa="email-field-input"
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

const currencyStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      inputText2: '9999.99',
      inputText3: '',
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
  },
  template: `
    <div style="width: 400px;">
      <fbx-text-field
        name="amount"
        class="input"
        placeholder="Enter an amount"
        v-model="inputText"
        currency
      />
      <fbx-text-field
        label="Prefilled"
        name="amount2"
        class="input"
        placeholder="Enter an amount"
        v-model="inputText2"
        currency
      />
      <fbx-text-field
        label="With Validations (min $1,000, max $1,999.99)"
        name="amount3"
        class="input"
        placeholder="Enter an amount"
        v-model="inputText3"
        currency
        :validations="{
          required: 'true',
          max_value: 1999.99,
          min_value: 1000,
        }"
      />
    </div>
  `,
})

const editableStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: '',
      inputText2: '',
    }
  },
  watch: {
    inputText(value) {
      action(`New value`)(value)
    },
    inputText2(value) {
      action(`New value`)(value)
    },
  },
  template: `
    <div style="width: 400px;">
      <fbx-text-field
        name="word"
        class="input"
        placeholder="Enter a word"
        v-model="inputText"
        editable
      />
      <fbx-text-field
        label="With currency and validations (min $1,000, max $9,999.99)"
        name="amount"
        class="input"
        placeholder="Enter an amount"
        v-model="inputText2"
        editable
        currency
        :validations="{
          required: 'true',
          max_value: 9999.99,
          min_value: 1000,
        }"
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
stories.add('currency', withSummary(currencyStory))
stories.add('editable', withSummary(editableStory))
