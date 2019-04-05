<template>
  <div class="fbx-text-field">
    <label class="fbx-text-field__label">{{ label }}</label>
    <div class="fbx-text-field__wrapper">
      <div class="fbx-text-field__input-wrapper">
        <input
          ref="fbxTextFieldInput"
          v-fbx-address-autocomplete="addressAutocomplete"
          v-fbx-autofocus="autofocus"
          v-fbx-currency
          v-mask="mask"
          :type="type"
          tabindex="0"
          :readonly="showEdit"
          class="fbx-text-field__input"
          :class="{
            password: isPassword,
            invalid: isInvalid,
            clearable: clearable,
            currency: isCurrency,
            editable: editable,
          }"
          v-validate="validations"
          v-bind="$attrs"
          :value="value"
          v-on="{ input: currency ? onCurrencyInput : onInput }"
          @change="onChange"
        />

        <span class="fbx-text-field__edit" v-if="showEdit" @click="onEdit">Edit</span>

        <div class="fbx-text-field__done-icons" v-if="showDoneIcons">
          <span class="done-icons__done-icon" @click="onDoneEditing">Done</span>
          <span class="done-icons__separator">|</span>
          <span class="done-icons__cancel-icon fbx-icon-x" @click="onCancelEditing"></span>
        </div>

        <span class="fbx-text-field__dollar-sign" v-if="isCurrency">$</span>

        <span class="fbx-text-field__password-button" @click="togglePassword" v-if="isPassword">{{ passwordButtonText }}</span>

        <span class="fbx-text-field__clear-icon" @click="clearField" v-if="clearable"></span>
      </div>
      <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
    </div>
  </div>
</template>

<script>
import '../../validations'
import { currencyFormatter } from '../../utils/currency-formatter.js'
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
    FbxAutofocus,
    FbxCurrency: {
      update(el, __binding, vnode) {
        if (vnode.context.currency) {
          if (el.value !== '') {
            el.value = currencyFormatter(el.value)
          }
        }
      },
    },
  },
  inheritAttrs: false,
  inject: ['$validator'],
  data() {
    return {
      isPassword: this.$attrs.type === 'password',
      type: this.$attrs.type || 'text',
      isEditing: false,
      valueBeforeEditing: '',
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
      default: '',
    },
    currency: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    addressAutocomplete: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: false,
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
    },
    isCurrency() {
      return this.currency && this.value.length
    },
    showEdit() {
      return this.editable && !this.isEditing
    },
    showDoneIcons() {
      return this.editable && this.isEditing
    },
  },
  methods: {
    togglePassword() {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    clearField() {
      this.$refs.fbxTextFieldInput.focus()
      this.$emit('input', '')
    },
    onEdit() {
      this.isEditing = true
      this.valueBeforeEditing = this.value
      this.$refs.fbxTextFieldInput.focus()
    },
    onDoneEditing() {
      this.isEditing = false
    },
    onCancelEditing() {
      this.isEditing = false
      this.$emit('input', this.valueBeforeEditing)
      // Rerender so that validation is run again on the value that we just rolled back to
      this.$forceUpdate()
    },
    onCurrencyInput(event) {
      let value = event.target.value
      if (value !== '') {
        value = currencyFormatter(value)
      }

      this.$emit('input', value.replace(/,/g, ''))
      // If a user types a letter instead of a number, immediately rerender with the formatted
      // value, so that the letter does not appear in the input
      this.$forceUpdate()
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

    // Don't show the focus bottom border if input is editable and in readonly mode
    &:not(:read-only):not(.invalid):focus {
      border-bottom: 1px solid $dark-green;
    }

    &.invalid {
      background-color: $extra-light-red;
      border-bottom: 1px solid $light-red;
    }

    &.clearable {
      padding-right: 35px;
    }

    &.currency {
      position: relative;
      padding-left: 25px;
    }

    &.editable {
      padding-right: 95px;
    }
  }

  .fbx-text-field__dollar-sign {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    @include font(16);
    user-select: none;
  }


  .fbx-text-field__edit,
  .fbx-text-field__done-icons,
  .fbx-text-field__password-button,
  .fbx-text-field__clear-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
  }

  .fbx-text-field__edit,
  .fbx-text-field__password-button {
    @include font(16);
    color: $dark-green;
    cursor: pointer;
  }

  .fbx-text-field__done-icons {
    display: flex;
    align-items: center;
    color: $dark-green;
  }

  .done-icons__done-icon {
    @include font(14);
  }

  .done-icons__done-icon,
  .done-icons__cancel-icon {
    cursor: pointer;
  }

  .done-icons__separator {
    margin: 0 13px;
    @include font(14);
    color: $extra-dark-gray;
  }

  .done-icons__cancel-icon {
    font-size: 9px;
    line-height: 21px;
  }

  .fbx-text-field__clear-icon {
    right: 5px;
    display: block;
    width: 30px;
    height: 100%;
    color: $medium-blue;
    cursor: pointer;
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
