<template>
  <fbx-modal-wrapper
    title="BASIC MODAL TITLE"
    close-btn-data-qa="basic-modal-close-btn"
    :modal-name="modalName"
    :on-close="onClose"
    @close-btn-clicked="onCloseBtnClicked"
  >
    <div v-if="showText">I am shown when showText is true</div>
    <div>some more text</div>
  </fbx-modal-wrapper>
</template>

<script>
import FbxModalWrapper from '../FbxModalWrapper.vue'
import { action } from '@storybook/addon-actions'

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
    onClose: Function
  },
  methods: {
    onCloseBtnClicked() {
      console.log('close-btn-clicked') // eslint-disable-line no-console
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
