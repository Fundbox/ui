<template>
  <div class="fbx-checkbox-container">
    <label class="fbx-checkbox" :class="{ 'fbx-checkbox-invalid': isInvalid }">
      <input
        tabindex="0"
        type="checkbox"
        class="input"
        v-validate="validations"
        v-bind="$attrs"
        v-on="listeners"
        :value="value"
        :checked="value"
      />
      <span class="box"></span>
      <slot></slot>
    </label>
    <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
  </div>
</template>

<script>
import FbxValidationMessage from "../FbxValidationMessage/FbxValidationMessage.vue"

export default {
  name: "FbxCheckbox",
  components: {
    FbxValidationMessage,
  },
  inheritAttrs: false,
  inject: ["$validator"],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    validations: String
  },
  computed: {
    isInvalid () {
      return this.errors.has(this.$attrs.name);
    },
    validationMessage () {
      return this.errors.first(this.$attrs.name);
    },
    listeners () {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event.target.checked);
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";

.fbx-checkbox {
  position: relative;
  display: block;
  text-align: left;
  padding-left: 25px;

  .input {
    opacity: 0;

    &,
    & + .box {
      position: absolute;
      top: 2px;
      left: 0;
      height: 16px;
      width: 16px;
      margin: 0;
    }

    & + .box {
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

  &.fbx-checkbox-invalid {
    padding-bottom: 10px;
    border-bottom: 1px solid $light-red;
  }
}
.validation-message {
  padding-top: 10px;
}
</style>
