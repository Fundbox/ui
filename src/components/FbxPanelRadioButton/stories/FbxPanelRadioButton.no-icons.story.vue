<template>
  <div class="fbx-panel-group-wrapper">
    <div>Selected: {{ selectedDataSource }}</div>

    <div class="fbx-panel-radio-button-group">
      <fbx-panel-radio-button
        v-model="selectedDataSource"
        value="Option One"
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
  </div>
</template>

<script>
import FbxPanelRadioButton from '../FbxPanelRadioButton.vue'

export default {
  components: { FbxPanelRadioButton },
  data() {
    return {
      selectedDataSource: null,
    }
  },
}
</script>
