<template>
  <div class="demo-modal">
    <fbx-button @click="openModal">
      Open basic modal
    </fbx-button>
  </div>
</template>

<script>
import FbxBasicModal from './FbxModal.basic.vue'
import FbxButton from '../../FbxButton/FbxButton.vue'
import { action } from '@storybook/addon-actions'

export default {
  components: { FbxBasicModal, FbxButton },
  methods: {
    openModal() {
      const modalName = 'my-modal-name'
      // this will be called via a dedicated vuex modal store
      // it's only here so that we can show the modal opening
      this.$modal.show(FbxBasicModal,
        {
          showText: true,
          modalName
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
      // console.log('before-open')
    },
    opened() {
      // console.log('opened')
    },
    beforeClose({ params }) {
      // you can pass params when calling this.$modal.hide(modalName, { param1, param2 })
      action('@beforeClose')(params)
    },
    closed() {
      // report to moxpanel
    }
  }
}
</script>

<style lang="scss">

</style>
