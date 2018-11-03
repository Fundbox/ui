<template>
  <div>
    <select
      class="fbx-select"
      v-validate="validations"
      v-bind="$attrs"
      v-on="listeners"
      :value="value"
      :class="{ invalid: isInvalid }"
    >
      <slot></slot>
    </select>
    <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
  </div>
</template>

<script>
import FbxValidationMessage from "../FbxValidationMessage/FbxValidationMessage.vue";
export default {
  name: "FbxSelect",
  inheritAttrs: false,
  inject: ["$validator"],
  components: {
    FbxValidationMessage
  },
  props: {
    validations: String,
    value: String
  },
  computed: {
    isInvalid() {
      return this.errors.has(this.$attrs.name);
    },
    validationMessage() {
      return this.errors.first(this.$attrs.name);
    },
    listeners() {
      return {
        // Pass all component listeners directly to button
        ...this.$listeners,
        change: ({ target }) => {
          this.$emit("input", target.value);
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";

.fbx-select {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  -webkit-appearance: none;
  appearance: none;
  padding: 15px;
  color: $extra-dark-gray;
  background: url("../assets/arrow-down.svg") no-repeat right 10px center white;
  background-color: $extra-light-gray;
  height: 50px;
  width: 100%;
  border-radius: 3px;
  border: none;

  &:focus,
  &:active {
    border-bottom: 2px solid $dark-green;
  }

  &.invalid {
    background-color: $extra-light-red;
    border-bottom: 2px solid $light-red;
  }
}

.validation-message {
  margin-top: 10px;
}
</style>
