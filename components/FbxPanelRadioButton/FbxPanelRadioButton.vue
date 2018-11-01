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
  <div class="panel-radio-button__inner-content">
    <div class="panel-radio-button__header">
      <div class="panel-radio-button__circle-indicator">
        <div class="selected-radio-circle"></div>
      </div>

      <slot name="header"></slot>

      <div
        class="panel-radio-button__icon"
        :style="headerIconStyles"
        v-if="iconPath">
      </div>
    </div>

    <div class="panel-radio-button__body">
      <slot name="body"></slot>
    </div>
  </div>
</label>
</template>

<script>
export default {
  name: "FbxPanelRadioButton",
  inheritAttrs: false,
  props: {
    iconPath: String,
  },
  data() {
    return {
      headerIconStyles: {
        backgroundImage: `url(${this.iconPath})`
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/utils/mixins.scss";
@import "../styles/utils/color-palette.scss";

.fbx-panel-radio-button {
  display: block;
  border: 1px solid $medium-gray;
  background-color: $white;
}

.radio-input--hidden {
  position: absolute;
  opacity: 0;
}

.panel-radio-button__inner-content {
}

.panel-radio-button__header {
  display: flex;
  align-items: center;
  padding: 5px 12px;
  @include font(18);
  background-color: $extra-light-gray;
}

.panel-radio-button__circle-indicator {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 11px;
  border-radius: 50%;
  border: 1px solid $extra-dark-gray;
}

.selected-radio-circle {
  display: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $dark-green;
}

.panel-radio-button__icon {
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background-size: contain;
}

.panel-radio-button__body {
  padding: 10px 15px 15px;
  @include font(14);
  line-height: 23px;
  color: $extra-dark-gray;
}
</style>
