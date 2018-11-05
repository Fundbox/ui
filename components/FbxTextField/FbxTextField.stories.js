import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxTextField from '../FbxTextField';
import summary from './FbxTextField.md';
const stories = storiesOf('Components/TextField', module);
const withSummery = withInfo({ summary });

const defaultStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Email Address"),
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
});

const passwordStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Password"),
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
});

const maskStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Email Address"),
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
});

const autofocusStory = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      labelText: text("Label", "Email Address"),
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
});

const addressAutocomplete = () => ({
  components: { FbxTextField },
  data() {
    return {
      inputText: "",
      addressData: {}
    }
  },
  methods: {
    onAddressDataChanged(addressData) {
      this.addressData = addressData;
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
});

stories.add('default', withSummery(defaultStory));
stories.add('password', withSummery(passwordStory));
stories.add('mask', withSummery(maskStory));
stories.add('autofocus', withSummery(autofocusStory));
stories.add('address autocomplete', withSummery(addressAutocomplete));
