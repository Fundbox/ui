<template>
  <div>
    <label class="fbx-checkbox" :class="{invalid: isInvalid}">
      <input type="checkbox" class="input" v-validate="validations" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.checked)" />
      <span class="box"></span>
      <slot></slot>
    </label>
    <!-- <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message> -->
  </div>
</template>

<script>
export default {
  name: "FbxCheckbox",
  inheritAttrs: false,
  inject: ["$validator"],
  props: {
    value: Boolean,
    validations: String
  },
  computed: {
    isInvalid () {
      return this.errors.has(this.$attrs.name);
    },
    validationMessage () {
      return this.errors.first(this.$attrs.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";
.fbx-checkbox {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding-left: 25px;

  .input {
    opacity: 0;
    height: 16px;
    width: 16px;
    margin: 0 10px 0 0;
    position: absolute;

    & + .box {
      position: absolute;
      top: 2px;
      left: 0;
      height: 16px;
      width: 16px;
      border: 1px solid $extra-dark-gray;
      background-color: $white;
      border-radius: 0;
    }

    &:checked + .box {
      background: url("./../assets/icon_check_active.svg") no-repeat 50% 50%;
    }

    &:focus + .box {
      border-color: $dark-green;
    }

    &:disabled + .box {
      background: url("./../assets/icon_check_disabled.svg") no-repeat 50% 50%;
      border-color: $medium-gray;
    }
  }
  &.invalid {
    padding-bottom: 10px;
    border-bottom: 1px solid $light-red;
  }
}
.validation-message {
  padding-top: 10px;
}
</style>
