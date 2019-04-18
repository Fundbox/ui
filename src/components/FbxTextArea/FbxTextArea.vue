<template>
  <div class="fbx-text-area-wrapper">
    <label class="fbx-text-area-label">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      class="fbx-text-area"
      :style="textAreaStyles"
      :maxlength="maxCount"
    />

    <div v-if="maxCount" class="fbx-text-area-char-count" :class="{ 'max-characters': hasReachedMaxChars }">
      {{ charCount }} / {{ maxCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FbxTextArea',
  inheritAttrs: false,
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
      return this.value.length || 0
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
    }
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
    padding: 15px 20px;
    color: $medium-blue;
    @include font(14);
    line-height: 21px;
    background: $extra-light-gray;
    border: none;

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
}
</style>
