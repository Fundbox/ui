<template>
<div class="story-container">
  <div class="margin">is on: {{ value }}</div>
  <fbx-ios-switch-button
  v-model="value"
  :debounceDisabled="shouldButtonBeDebouncedDisabled"
  @change="onChange"
>
  </fbx-ios-switch-button>
</div>
</template>

<script>
import FbxIosSwitchButton from '../FbxIosSwitchButton'
import { action } from '@storybook/addon-actions'
export default {
  components: { FbxIosSwitchButton },
  data() {
    return { shouldButtonBeDebouncedDisabled: true, value: true }
  },
  methods: {
    onChange: action('on change')
  },
}
</script>

<style lang="scss" scoped>
  .story-container {
    padding: 16px;
  }
  .margin {
    margin-bottom: 20px;
  }
</style>
