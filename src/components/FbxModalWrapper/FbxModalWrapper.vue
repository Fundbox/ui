<template>
  <div class="fbx-ui-modal-wrapper layout-column">
    <div :class="[headerClass, 'layout-row', 'vertical-center']">
      <div class="font-18">{{ title }}</div>
      <fbx-close-button
        :data-qa="closeBtnDataQa"
        class="modal-close-button"
        @click="onCloseClick"
      />
    </div>

    <div class="body">
      <div v-if="isLoading" class="loading"></div>
      <div v-else>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import FbxCloseButton from '../FbxCloseButton/FbxCloseButton.vue'
import { isFunction } from 'lodash'

export default {
  components: { FbxCloseButton },
  name: 'FbxModalWrapper',
  destroyed() {
    if (isFunction(this.onClose)) {
      this.onClose()
    }
  },
  props: {
    isLoading: Boolean,
    closeBtnDataQa: String,
    title: String,
    onClose: Function
  },
  computed: {
    headerClass() {
      return this.title ? 'header' : 'no-header'
    }
  },
  inject: ['$validator'],
  methods: {
    onCloseClick() {
      this.$emit('close-btn-clicked')
    }
  }
}
</script>


<style lang="scss">
  @import "../../styles/utils/mixins.scss";
  @import "../../styles/utils/color-palette";

  .v--modal-top-right {
    display: none;
  }

  .v--modal-background-click {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v--modal-overlay {
    // $medium-blue with $fbx-backdrop-opacity
    // if we're using the opacity rule then it affects the inner modal box
    background-color: rgba(44, 62, 80, 0.4);
  }

  .v--modal-overlay.scrollable .v--modal-box {
    margin: 0;
  }

  .overlay-transition-enter-active,
  .overlay-transition-leave-active {
    transition: opacity $medium-ease;
  }

  .overlay-transition-enter,
  .overlay-transition-leave-active {
    opacity: 0;
  }

  .box-transition-enter-active,
  .box-transition-leave-active {
    transition: all $medium-bounce;
  }

  .box-transition-enter,
  .box-transition-leave-active {
    opacity: 0;
    transform: translateY(25px);
  }

  .fbx-ui-modal {
    &.v--modal-box {
      position: static;
      @include viewport("sm") {
        margin: 0;
        position: absolute;
        top: 0 !important;
        height: 100% !important;
      }
    }
  }

  .fbx-ui-modal-wrapper {
    position: relative;
    height: 100%;
    background-color: $white;

    .header {
      justify-content: space-between;
      padding: 30px;
      background: $light-gray;
      @include viewport("md") {
        padding: 28px 30px;
      }
    }

    .no-header {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 1;
    }

    .modal-close-button {
      font-size: 24px;
      line-height: 24px !important;
    }

    .body {
      padding: 30px;
      position: relative;
      flex: 1;
      @include viewport("sm") {
        overflow-y: auto;
      }
    }

    .loading {
      background-image: url("../../assets/loading-anim.gif");
      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;
      background-size: 100px;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      position: absolute;
    }
  }

</style>
