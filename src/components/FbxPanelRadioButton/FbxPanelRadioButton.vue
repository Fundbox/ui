<template>
<label
  tabindex="0"
  class="fbx-panel-radio-button"
  :class="{ 'fbx-panel-radio-button--checked': isChecked }"
  @change="onChange"
>
  <input
    type="radio"
    name="fbx-panel-radio-button"
    class="radio-input--hidden"
    :value="value"
    :checked="isChecked"
  />
  <div class="panel-radio-button__inner-content">
    <div class="panel-radio-button__header">
      <div class="panel-radio-button__circle-indicator">
        <div class="selected-radio-circle" :class="{ 'selected-radio-circle--visible': isChecked }"></div>
      </div>

      <div class="panel-radio-button__header-text">
        <slot name="header"></slot>
      </div>

      <div class="panel-radio-button__icon" v-if="iconPath">
        <img :src="iconPath" />
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
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    iconPath: String,
    value: String,
    modelValue: {
      default: "",
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    },
  },
  methods: {
    onChange() {
      this.$emit("change", this.value)
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/utils/mixins.scss";
@import "../../styles/utils/color-palette.scss";

.fbx-panel-radio-button {
  display: block;
  max-width: 540px;
  border: 1px solid $medium-gray;
  background-color: $white;
  @include viewport("md") {
    cursor: pointer;

    &:hover {
      border: 1px solid $dark-green;

      .panel-radio-button__circle-indicator {
        border-color: $dark-green;
      }

      .selected-radio-circle:not(.selected-radio-circle--visible) {
        display: block;
        background-color: $extra-light-green;
      }
    }
  }
  @include viewport("lg") {
    width: 300px;
    transition: all .1s ease-in-out;

    &:hover:not(.fbx-panel-radio-button--checked) {
      transform: scale(1.03);

      .panel-radio-button__header {
        background-color: $extra-light-green;
      }
    }
  }
}

.fbx-panel-radio-button--checked {
  border: 1px solid $dark-green;

  .panel-radio-button__circle-indicator {
    border-color: $dark-green;
  }

  @include viewport("lg") {
    .panel-radio-button__header {
      background-color: $extra-light-green;
    }
  }
}

.radio-input--hidden {
  position: absolute;
  opacity: 0;
  cursor: inherit;
}

.panel-radio-button__inner-content {
  user-select: none;
}

.panel-radio-button__header {
  display: flex;
  align-items: center;
  min-height: 59px;
  padding: 5px 12px;
  background-color: $extra-light-gray;
  @include viewport("md") {
    min-height: 56px;
  }
  @include viewport("lg") {
    flex-direction: column-reverse;
    min-height: 88px;
    padding-top: 12px;
    padding-bottom: 18px;
  }
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
  @include viewport("lg") {
    display: none;
  }
}

.selected-radio-circle {
  display: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $dark-green;
}

.selected-radio-circle--visible {
  display: block;
}

.panel-radio-button__header-text {
  flex: 1;
  @include font(18);
  @include viewport("lg") {
    text-align: center;
    line-height: 22px;
  }
}

.panel-radio-button__icon {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 32px;
  margin-left: 15px;
  @include viewport("lg") {
    margin-left: 0;
    margin-bottom: 13px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

.panel-radio-button__body {
  padding: 10px 15px 15px;
  @include font(14);
  line-height: 23px;
  color: $extra-dark-gray;
  @include viewport('md') {
    padding-left: 25px;
    padding-right: 25px;
  }
  @include viewport("lg") {
    padding: 22px 21px 25px;
  }
}
</style>
