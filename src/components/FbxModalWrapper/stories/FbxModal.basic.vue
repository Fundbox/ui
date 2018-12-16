<template>
  <fbx-modal-wrapper
    title="BASIC MODAL TITLE"
    close-btn-data-qa="basic-modal-close-btn"
    :modal-name="modalName"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
export default {
  name: 'FbxBasicModal',
  props: {
    modalName: {
      type: String,
      required: true
    },
    showText: {
      type: Boolean,
      default: false,
    }
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
