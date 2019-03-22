<template>
  <div class="fbx-text-field">
    <label class="fbx-text-field__label">{{ label }}</label>
    <div class="fbx-text-field__wrapper">
      <div class="fbx-text-field__input-wrapper">
        <input
          ref="fbxTextFieldInput"
          v-fbx-address-autocomplete="addressAutocomplete"
          v-fbx-autofocus="autofocus"
          v-mask="mask"
          :type="type"
          tabindex="0"
          class="fbx-text-field__input"
          :class="{ password: isPassword, invalid: isInvalid, clearable: clearable }"
          v-validate="validations"
          v-bind="$attrs"
          :value="value"
          @input="onInput"
          @change="onChange"
        />

        <span class="fbx-text-field__password-button" @click="togglePassword" v-if="isPassword">{{ passwordButtonText }}</span>

        <span class="fbx-text-field__clear-icon" @click="clearField" v-if="clearable"></span>
      </div>
      <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
    </div>
  </div>
</template>

<script>
import '../../validations'
import { VueMaskDirective } from 'v-mask'
import FbxValidationMessage from '../FbxValidationMessage/FbxValidationMessage.vue'
import FbxAddressAutocomplete from '../../directives/FbxAddressAutocomplete/FbxAddressAutocomplete'
import FbxAutofocus from '../../directives/FbxAutofocus/FbxAutofocus'

export default {
  name: 'FbxTextField',
  components: {
    FbxValidationMessage
  },
  directives: {
    mask: VueMaskDirective,
    FbxAddressAutocomplete,
    FbxAutofocus
  },
  inheritAttrs: false,
  inject: ['$validator'],
  data() {
    return {
      isPassword: this.$attrs.type === 'password',
      type: this.$attrs.type || 'text'
    }
  },
  props: {
    label: String,
    value: {
      type: [String, Number],
    },
    validations: {
      type: [String, Object],
    },
    mask: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    addressAutocomplete: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    passwordButtonText() {
      return this.isPassword && this.type === 'text' ? 'Hide' : 'Show'
    },
    isInvalid() {
      return this.errors.has(this.$attrs.name, this.$attrs.scope)
    },
    validationMessage() {
      return this.errors.first(this.$attrs.name, this.$attrs.scope)
    }
  },
  methods: {
    togglePassword() {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    clearField() {
      this.$refs.fbxTextFieldInput.focus()
      this.$emit('input', '')
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onChange(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles/utils/color-palette";
@import "../../styles/utils/mixins";

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

    &.clearable {
      padding-right: 35px;
    }
  }

  .fbx-text-field__password-button,
  .fbx-text-field__clear-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
  }

  .fbx-text-field__password-button {
    @include font(16);
    color: $dark-green;
  }

  .fbx-text-field__clear-icon {
    right: 5px;
    display: block;
    width: 30px;
    height: 100%;
    color: $medium-blue;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 12px 10px;
    background-image: url("../../assets/icon_active_x_icon.png");

    &:hover {
      background-image: url("../../assets/icon_active_x_icon_active.png");
    }
  }

  .validation-message {
    margin-top: 10px;
  }
}
</style>
