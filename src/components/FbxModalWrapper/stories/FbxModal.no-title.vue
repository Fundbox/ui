<template>
  <fbx-modal-wrapper
    close-btn-data-qa="no-title-modal-close-btn"
    :modal-name="modalName"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
export default {
  name: 'FbxNoTitleModal',
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
