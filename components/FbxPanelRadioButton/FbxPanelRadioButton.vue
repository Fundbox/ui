<template>
<label
  tabindex="0"
  class="fbx-panel-radio-button"
>
  <input
    type="radio"
    class="radio-input--hidden"
    v-bind="$attrs"
  />
  <div class="fbx-panel-radio-button__inner-content">
    <slot></slot>
  </div>
</label>
</template>

<script>
export default {
  name: "FbxPanelRadioButton",
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.fbx-panel-radio-button {
  .radio-input--hidden {
    position: absolute;
    opacity: 0;
  }

  .fbx-panel-radio-button__inner-content {
    padding: 20px;
  }
}

</style>
