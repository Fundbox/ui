<template>
<span class="fbx-close-button fbx-icon-close" v-on="listeners"></span>
</template>

<script>
export default {
  name: "fbx-close-button",
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      }
    },
  },
};
</script>

<style lang="scss">
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
