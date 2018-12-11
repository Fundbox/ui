<template>
  <fbx-modal-wrapper
    title="SCROLLABLE MODAL TITLE"
    close-btn-data-qa="scrollable-modal-close-btn"
    :modal-name="modalName"
  >
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'

export default {
  components: { FbxModalWrapper },
  name: 'FbxScrollableModal',
  props: {
    modalName: {
      type: String,
      default: '',
      required: true
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
