<template>
  <div class="fbx-tooltip">
    <b-tooltip :offset="offset" :target="target" :delay="delay" :title="title" :placement="placement" :triggers="triggers" :container="container" :boundary="boundary">
      <slot />
    </b-tooltip>
  </div>
</template>

<script>
  import Vue from "vue";
  import bTooltip from 'bootstrap-vue/es/components/tooltip/tooltip';

  Vue.component('b-tooltip', bTooltip);

  export default {
    name: "FbxTooltip",
    data() {
      return {}
    },
    props: {
      target: {
        required: true,
        type: String
      },
      title: {
        type:  String,
        default: ""
      },
      placement: {
        type: String,
        default: "top"
      },
      triggers: {
        type: String,
        default: "hover focus"
      },
      delay: {
        type: String,
        default: ""
      },
      container: {
        type: String,
        default: null
      },
      boundary: {
        type: String,
        default: "scrollParent"
      },
      offset: {
        type: String,
        default: "0"
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss">
  @import "./../styles/utils/color-palette";
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
