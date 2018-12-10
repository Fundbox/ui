<template>
  <fbx-modal-wrapper
    title="DEMO MODAL TITLE"
    close-btn-data-qa="demo-modal-close-btn"
    :modal-name="modalName"
  >
    <div>Hello from demo modal with a {{ someParam }}</div>
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
    <!--<div>some more text</div>-->
    <!--<div>some more text</div>-->
    <!--<div>some more text</div>-->
    <!--<div>some more text</div>-->
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'

export default {
  components: { FbxModalWrapper },
  name: 'FbxDemoModal',
  props: ['someParam', 'modalName']
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
