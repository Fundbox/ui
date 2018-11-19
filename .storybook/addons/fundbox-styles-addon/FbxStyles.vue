<template>
  <div class="fundbox-styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FbxStyleAddon"
}
</script>
<style lang="scss">
@import "../../../src/styles/utils/reset.scss";
@import "../../../src/styles/utils/fonts-generator.scss";
</style>
