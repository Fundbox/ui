<template>
  <div class="fbx-text-field">
    <label class="fbx-text-field__label">{{ label }}</label>

    <input
      :type="type"
      tabindex="0"
      class="fbx-text-field__input"
      :class="{ invalid: isInvalid }"
      v-validate="validations"
      v-bind="$attrs"
      :value="value"
      @input="onInput"
      @change="onChange"
    />

    <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
  </div>
</template>

<script>
export default {
  name: "FbxTextField",
  inheritAttrs: false,
  inject: ["$validator"],
  data() {
    return {
      type: this.$attrs.type || "text",
    }
  },
  props: {
    label: String,
    value: String,
    validations: String,
  },
  computed: {
    isInvalid() {
      return this.errors.has(this.$attrs.name)
    },
    validationMessage() {
      return this.errors.first(this.$attrs.name)
    }
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value)
      // this.$forceUpdate()
    },
    onChange(event) {
      this.$emit("change", event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";
@import "./../styles/utils/mixins";

.fbx-text-field {
  .fbx-text-field__label {
    @include font(10);
  }

  .fbx-text-field__input {
    width: inherit;
    height: 50px;
    min-width: 240px;
    padding: 15px;
    @include font(16);
    border-radius: 3px;
    border: none;
    background-color: $extra-light-gray;
    outline: none;

    &:focus {
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
}
</style>
