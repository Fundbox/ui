<template>
  <button
    tabindex="0"
    type="button"
    class="fbx-cta-button"
    :class="{'fbx-button-inverse': inverse, 'loading': loading }"
    :disabled="loading"
    v-on="listeners"
  >
    <span v-if="loading" class="fbx-button-loading"></span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'FbxButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/utils/mixins.scss";
@import "../../styles/utils/variables.scss";
@import "../../styles/utils/color-palette.scss";

.fbx-cta-button {
  position: relative;
  display: block;
  min-height: 30px;
  min-width: 120px;
  max-width: 100%;
  height: $input-height;
  padding: 10px 20px;
  overflow: hidden;
  transition: background $super-fast-ease;
  font-size: 14px;
  font-weight: 300;
  // Prevent font mixin from making the button text uncentered
  line-height: normal !important;
  color: $white;
  text-align: center;
  outline: none;
  border: 0;
  // Chrome 62 adds 4px border-radius by default to match MacOS native styles
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  box-sizing: border-box;
  background: $dark-green;
  @include viewport("md") {
    &:hover:not(:disabled) {
      background: $medium-green;
    }
    &:active:not(:disabled) {
      background: $dark-green;
    }
  }

  &:disabled:not(.loading) {
    color: $extra-dark-gray;
    border: 1px solid $extra-dark-gray;
    background: $white;
    cursor: default;
  }

  &:focus {
    outline: none;
  }

  &.fbx-button-inverse {
    background: transparent;
    color: $dark-green;
    @include viewport("md") {
      &:hover {
        background: $dark-green;
        color: $white;
      }

      &:active {
        background: $light-green;
        color: $white;
      }
    }
  }
}

.fbx-button-loading {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  content: "";
  position: absolute;
  background-image: url("../../assets/btn-ajax-loading.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 40px;
}
</style>
