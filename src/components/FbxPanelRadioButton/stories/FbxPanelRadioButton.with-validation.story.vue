<template>
<form class="fbx-panel-group-wrapper">
  <div>➡️ Click the Submit button below <em>without</em> choosing an option to see the validation message</div>

  <div class="fbx-panel-radio-button-group">
    <fbx-panel-radio-button
      v-model="selectedDataSource"
      value="Option One"
      data-vv-name="fbx-panel-radio-button"
      v-validate="'required'"
    >
      <div slot="header">Option 1</div>
      <div slot="body">Some body text</div>
    </fbx-panel-radio-button>

    <fbx-panel-radio-button
      v-model="selectedDataSource"
      value="Option Two"
    >
      <div slot="header">Option 2</div>
      <div slot="body">
        Dynamic HTML content <strong>is very handy</strong>
        <br />
        <pre>npm i -g npm</pre>
      </div>
    </fbx-panel-radio-button>
  </div>

  <fbx-validation-message class="validation-message" v-if="isInvalid">
    {{ validationMessage }}
  </fbx-validation-message>

  <fbx-button @click="onSubmit">Submit</fbx-button>

  <fbx-button @click="onReset">Reset Form</fbx-button>
</form>
</template>

<script>
import { action } from '@storybook/addon-actions';
import FbxPanelRadioButton from '../FbxPanelRadioButton.vue';
import FbxButton from '../../FbxButton/FbxButton';
import FbxValidationMessage from '../../FbxValidationMessage/FbxValidationMessage';

export default {
  components: { FbxPanelRadioButton, FbxValidationMessage, FbxButton },
  data() {
    return {
      selectedDataSource: null,
    }
  },
  computed: {
    isInvalid() {
      return this.errors.has("fbx-panel-radio-button")
    },
    validationMessage() {
      return this.errors.first("fbx-panel-radio-button")
    },
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then(valid => {
        if (valid) {
          action(`Submitted value: ${this.selectedDataSource}`)()
        } else {
          action("Form is invalid. Nothing selected.")()
        }
      });
    },
    onReset() {
      this.selectedDataSource = null
    },
  },
}
</script>

