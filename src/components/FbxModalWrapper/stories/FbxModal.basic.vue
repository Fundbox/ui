<template>
  <fbx-modal-wrapper
    title="BASIC MODAL TITLE"
    close-btn-data-qa="basic-modal-close-btn"
    :modal-name="modalName"
    :on-close="runWhenClosed"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'

export default {
  components: { FbxModalWrapper },
  name: 'FbxBasicModal',
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
    runWhenClosed() {
      // code here will run when the modal is closed.
      // you can also pass this callback as a prop to this modal
      // console.log('closed')
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
