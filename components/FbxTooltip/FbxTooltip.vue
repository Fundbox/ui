<template>
  <b-tooltip v-bind="$attrs">
    <slot />
  </b-tooltip>
</template>

<script>
  export default {
    name: "FbxTooltip",
  }
</script>

<style lang="scss">
  @import "../../styles/utils/color-palette";
  .tooltip {
    position: absolute;
    opacity: 0;
    margin: 10px;
    &.fade { transition: opacity .15s linear; }
    &.show { opacity: 1; }

    .tooltip-inner {
      background: $medium-blue;
      padding: 13px;
      color: $white;
    }
    .arrow {
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
    }
  }

  .arrow {
    .tooltip[x-placement="top"] & {
      border-width: 7px 7px 0;
      border-color: $medium-blue transparent transparent transparent;
      top: 100%;
    }
    .tooltip[x-placement="bottom"] & {
      border-width: 0 7px 7px;
      border-color: transparent transparent $medium-blue transparent;
      bottom: 100%;
    }
    .tooltip[x-placement="left"] & {
      border-width: 7px 0 7px 6px;
      border-color: transparent transparent transparent $medium-blue;
      left: 100%;
    }
    .tooltip[x-placement="right"] & {
      border-width: 7px 6px 7px 0;
      border-color: transparent $medium-blue transparent transparent;
      right: 100%;
    }
  }
</style>
