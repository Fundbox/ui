<template>
  <fbx-modal-wrapper
    close-btn-data-qa="no-title-modal-close-btn"
    @close-btn-clicked="onCloseBtnClicked"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import { action } from '@storybook/addon-actions'

export default {

  name: 'FbxNoTitleModal',
  props: {
    modalName: {
      type: String,
      required: true
    },
    showText: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCloseBtnClicked() {
      action('@close-btn-clicked')()
      // calling hide here is only for closing the demo. In the app this will be managed via the modal store
      this.$modal.hide(this.modalName)
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
