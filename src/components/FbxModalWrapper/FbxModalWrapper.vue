<template>
  <div class="fbx-ui-modal-wrapper layout-column">
    <div class="header layout-row vertical-center">
      <div class="font-18">{{ title }}</div>
      <fbx-close-button
        :data-qa="closeBtnDataQa"
        class="modal-close-button"
        @click="onCloseClick"
      />
    </div>

    <div class="body">
      <slot/>
    </div>
  </div>
</template>

<script>
import FbxCloseButton from '../FbxCloseButton/FbxCloseButton.vue'

export default {
  components: { FbxCloseButton },
  name: 'FbxDemoModal',
  props: {
    closeBtnDataQa: String,
    title: String,
    modalName: String
  },
  methods: {
    onCloseClick() {
      this.$modal.hide(this.modalName)
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

  .v--modal-overlay {
    // $medium-blue with $fbx-backdrop-opacity
    // if we're using the opacity rule then it affects the inner modal box
    background-color: rgba(44, 62, 80, 0.4);
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
      margin: 100px auto;
      @include viewport("sm") {
        position: absolute;
        top: 0 !important;
        height: 100% !important;
        margin: 0;
      }
    }
  }

  .fbx-ui-modal-wrapper {
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

    .modal-close-button {
      font-size: 24px;
    }

    .body {
      overflow-y: scroll;
      padding: 30px;
    }
  }

</style>
