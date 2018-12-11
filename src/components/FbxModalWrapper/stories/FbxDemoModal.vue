<template>
  <fbx-modal-wrapper
    title="DEMO MODAL TITLE"
    close-btn-data-qa="demo-modal-close-btn"
    :modal-name="modalName"
    :on-close-btn-clicked="runClosebtnClicked"
  >
    <div v-if="showText">I am shown when showText is true</div>
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
  name: 'FbxDemoModal',
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
  },
  methods: {
    runClosebtnClicked() {
    }
  }
}
</script>

<style lang="scss">
  @import "../../../styles/utils/mixins.scss";

  @include viewport("md") {
    .fbx-ui-modal {
      width: 700px !important;
      height: 450px !important;
    }
  }
</style>
