<template>
  <span class="icon-wrapper" :class="classes" :style="styles"></span>
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
@import '../../styles/fonts/icomoon/style.css';
@import '../../styles/utils/utilities.scss';

$icon-size: 2.5em;

.icon-wrapper{
  display: inline-block;
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
    @extend .absolute-center;
    // Icomoon icons are not dead centered.
    transform: translate(-47%, -56%);
    font-size: inherit;
  }
}
</style>
