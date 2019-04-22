<template>
  <div class="fbx-text-area-wrapper">
    <label v-if="label" class="fbx-text-area-label">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      v-validate="validations"
      class="fbx-text-area"
      :class="{ invalid: isInvalid }"
      :style="textAreaStyles"
      :maxlength="maxCount"
    />

    <div v-if="maxCount" class="fbx-text-area-char-count" :class="{ 'max-characters': hasReachedMaxChars }">
      {{ charCount }} / {{ maxCount }}
    </div>
    <fbx-validation-message class="validation-message" v-if="isInvalid">{{ validationMessage }}</fbx-validation-message>
  </div>
</template>

<script>
import '../../validations'
import FbxValidationMessage from '../FbxValidationMessage/FbxValidationMessage.vue'

export default {
  name: 'FbxTextArea',
  components: {
    FbxValidationMessage
  },
  inheritAttrs: false,
  inject: ['$validator'],
  data() {
    return {
      textAreaStyles: {
        resize: this.resize,
      },
    }
  },
  props: {
    label: String,
    value: {
      type: String,
      default: '',
    },
    validations: {
      type: [String, Object],
    },
    resize: {
      type: String,
      default: 'none',
      validator(value) {
        return ['none', 'both', 'vertical', 'horizontal'].includes(value)
      },
    },
    maxCount: {
      type: Number,
      validator(value) {
        return value > 0
      },
    },
  },
  computed: {
    charCount() {
      return this.value.length
    },
    hasReachedMaxChars() {
      return this.value.length === this.maxCount
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event.target.value)
        },
      }
    },
    isInvalid() {
      return this.errors.has(this.$attrs.name, this.$attrs.scope)
    },
    validationMessage() {
      return this.errors.first(this.$attrs.name, this.$attrs.scope)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles/utils/color-palette";
@import "../../styles/utils/mixins";

.fbx-text-area-wrapper {
  .fbx-text-area-label {
    display: block;
    margin-bottom: 7px;
    color: $extra-dark-gray;
    @include font(16, light);
  }

  .fbx-text-area {
    width: 100%;
    min-height: 50px;
    padding: 15px 20px;
    color: $medium-blue;
    @include font(14);
    line-height: 21px;
    background: $extra-light-gray;
    border: none;

    &.invalid {
      background-color: $extra-light-red;
      border-bottom: 1px solid $light-red;
    }

    &::placeholder {
      @include font(14);
      line-height: 21px;
      color: $extra-dark-gray;
    }
  }

  .fbx-text-area-char-count {
    text-align: right;
    font-size: 13px;
    font-weight: 300;
    color: $extra-dark-gray;
  }

  .max-characters {
    color: $medium-red;
  }

  .validation-message {
    margin-top: 10px;
  }
}
</style>
