<template>
  <div class="demo-modal">
    <fbx-button @click="openModal">
      Open modal with on-close handler
    </fbx-button>
  </div>
</template>

<script>
import { isObject, isFunction } from 'lodash'
import FbxModalWithOnClose from './FbxModal.on-close.vue'
import FbxButton from '../../FbxButton/FbxButton.vue'

export default {
  components: { FbxModalWithOnClose, FbxButton },
  methods: {
    openModal() {
      const modalName = 'my-modal-name'
      // this will be called via a dedicated vuex modal store
      // it's only here so that we can show the modal opening
      this.$modal.show(FbxModalWithOnClose, {
        showText: true, modalName, onClose() {
          // code here will run when the user clicks on the close button
        }
      },
      {
        name: modalName,
        adaptive: true,
        scrollable: true,
        transition: 'box-transition',
        overlayTransition: 'overlay-transition',
        classes: ['fbx-ui-modal'],
        height: 'auto'
      },
      {
        'before-open': this.beforeOpen,
        opened: this.opened,
        'before-close': this.beforeClose,
        closed: this.closed
      })
    },
    beforeOpen() {

    },
    opened() {

    },
    beforeClose({ params }) {
      if (isObject(params) && isFunction(params.onClose)) {
        params.onClose()
      }
    },
    closed() {

    }
  }
}
</script>

<style lang="scss">

</style>
