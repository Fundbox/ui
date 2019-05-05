<template>
  <span class="icon-wrapper layout-row horizontal-center vertical-center" :class="classes" :style="styles"></span>
</template>

<script>
export default {
  name: 'FbxIcomoon',
  props: {
    name: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`fbx-icon-${this.name}`]: true,
        round: this.round,
        styled: this.round || this.background,
      }
    },
    styles() {
      return {
        background: this.background,
        color: this.color,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@fundbox/ui/es/styles/fonts/icomoon/style.css';
@import '~@fundbox/ui/es/styles/utils/utilities.scss';

$icon-size: 2.5em;

.icon-wrapper{
  position: relative;

  &.styled {
    height: $icon-size;
    width: $icon-size;
  }

  &.round {
    border-radius: 50%;
  }

  &:before {
    background-color: inherit;
    color: inherit;
    font-size: inherit;
  }
}
</style>
