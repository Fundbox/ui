<template>
  <fbx-modal-wrapper
    title="LOADING MODAL TITLE"
    close-btn-data-qa="loading-modal-close-btn"
    :modal-name="modalName"
    :is-loading="true"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'

export default {
  components: { FbxModalWrapper },
  name: 'FbxLoadingModal',
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
