<template>
  <fbx-modal-wrapper
    title="MODAL WITH ON-CLOSE TITLE"
    close-btn-data-qa="modal-with-on-close-close-btn"
    :modal-name="modalName"
    :on-close="onClose"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'

export default {
  components: { FbxModalWrapper },
  name: 'FbxModalWithOnClose',
  props: {
    modalName: {
      type: String,
      default: '',
      required: true
    },
    showText: {
      type: Boolean,
      default: false,
    },
    onClose: Function
  }
}
</script>

<style lang="scss">
  @import "../../../styles/utils/mixins.scss";

  @include viewport("md") {
    .fbx-ui-modal {
      width: 700px !important;
    }
  }
</style>
