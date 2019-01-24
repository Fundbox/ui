<template>
  <div class="notice">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FbxNotice',
}
</script>

<style lang="scss" scoped>
  @import "../../styles/utils/color-palette.scss";

  .notice {
    background-color: $light-blue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
