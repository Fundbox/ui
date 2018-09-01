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
@import "./../../../components/styles/utils/reset.scss";
@import "./../../../components/styles/utils/fonts-generator.scss";
</style>
