<template>
  <div class="fbx-text-field">
    <label class="fbx-text-field__label">{{ label }}</label>

    <div class="fbx-text-field__wrapper">
      <div class="fbx-text-field__input-wrapper">
        <input
          :type="type"
          tabindex="0"
          class="fbx-text-field__input"
          :class="{ password: isPassword, invalid: isInvalid }"
          v-validate="validations"
          v-bind="$attrs"
          :value="value"
          @input="onInput"
          @change="onChange"
        />

        <span class="fbx-text-field__password-button" @click="togglePassword" v-if="isPassword">{{ passwordButtonText }}</span>

      </div>
      <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
    </div>
  </div>
</template>

<script>
import FbxValidationMessage from "../FbxValidationMessage/FbxValidationMessage.vue"

export default {
  name: "FbxTextField",
  components: {
    FbxValidationMessage,
  },
  inheritAttrs: false,
  inject: ["$validator"],
  data() {
    return {
      isPassword: this.$attrs.type === "password",
      type: this.$attrs.type || "text",
    }
  },
  props: {
    label: String,
    value: [String, Number],
    validations: String,
  },
  computed: {
    passwordButtonText() {
      return this.isPassword && this.type === "text" ? "Hide" : "Show";
    },
    isInvalid() {
      return this.errors.has(this.$attrs.name)
    },
    validationMessage() {
      return this.errors.first(this.$attrs.name)
    }
  },
  methods: {
    togglePassword() {
      this.type = this.type === "password" ? "text" : "password";
    },
    onInput(event) {
      this.$emit("input", event.target.value)
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
  position: relative;
  display: inline-block;
  width: 100%;

  .fbx-text-field__label {
    display: block;
    margin-bottom: 7px;
    color: $extra-dark-gray;
    @include font(16, light);
  }

  .fbx-text-field__wrapper {
    margin-bottom: 22px;
  }

  .fbx-text-field__input-wrapper {
    position: relative;
  }

  .fbx-text-field__input {
    display: block;
    width: 100%;
    height: 50px;
    min-width: 240px;
    padding: 15px;
    @include font(16);
    border: none;
    color: $medium-blue;
    background-color: $extra-light-gray;
    outline: none;

    &.password {
      padding-right: 60px;
    }

    &:focus {
      border-bottom: 1px solid $dark-green;
    }

    &.invalid {
      background-color: $extra-light-red;
      border-bottom: 1px solid $light-red;
    }
  }

  .fbx-text-field__password-button {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: $dark-green;
    @include font(16);
    cursor: pointer;
    user-select: none;
  }

  .validation-message {
    margin-top: 10px;
  }
}
</style>
