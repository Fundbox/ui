<template>
  <button class="fbx-button" v-on="listeners" :disabled="pending">
    <span class="loader" v-if="pending"></span>
    <slot v-if="!pending"></slot>
  </button>
</template>

<script>
export default {
  name: "fbx-button",
  props: {
    pending: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../styles/color-palete";
@import "./../styles/variables";
@import "./../styles/mixins";

$button-min-height: 30px;
$button-min-width: 120px;

.fbx-button {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 10px 20px;
  transition: background $super-fast-ease;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  min-height: $button-min-height;
  min-width: $button-min-width;
  outline: none;
  border: 0;
  // Chrome 62 adds 4px border-radius by default to match MacOS native styles
  border-radius: 0;
  user-select: none;
  height: $input-height;
  white-space: nowrap;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  background: $dark-green;
  color: $white;

  &:disabled {
    color: $extra-dark-gray;
    border: 1px solid $extra-dark-gray;
    background: $white;
    cursor: default;
  }

  // Make sure content inside button (like svg elements)
  // is not breaking click behavior
  &:after {
    content: "";
    background: transparent;
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
  &:focus {
    outline: none;
  }
  &:hover:not(:disabled) {
    background: $medium-green;
  }

  &:active:not(:disabled) {
    background: $dark-green;
  }
}

.loader {
  background-image: url("../assets/btn-ajax-loading.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 40px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  content: "";
  position: absolute;
}
</style>
