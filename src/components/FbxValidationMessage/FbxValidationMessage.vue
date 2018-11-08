<template>
  <div class="fbx-validation-message font-14">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FbxValidationMessage"
};
</script>

<style lang="scss" scoped>
@import "../../styles/utils/color-palette";
.fbx-validation-message {
  color: $light-red;
  text-align: left;
}
</style>
