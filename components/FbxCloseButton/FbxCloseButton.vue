<template>
<span
  class="fbx-close-button"
  :class="{ 'fbx-icon-close_hover': hover, 'fbx-icon-close': !hover }"
  @mouseover="toggleHover"
  @mouseleave="toggleHover"
  v-on="listeners"></span>

</template>

<script>
export default {
  name: "FbxCloseButton",
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      }
    },
  },
  methods: {
    toggleHover() {
      this.hover = !this.hover;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette.scss";
@import "./../styles/fonts/icomoon/style.css";

.fbx-close-button {
  // Make sure icon container is not bigger then the icon itself.
  // It must be `important!` because combined with utility class
  // there can be an unwanted line-height override.
  display: block;
  line-height: 0 !important;
  color: $dark-green;
  cursor: pointer;
}
</style>
