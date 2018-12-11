<template>
  <div class="demo-modal">
    <fbx-button @click="openModal">
      Open demo modal
    </fbx-button>
  </div>
</template>

<script>
import FbxDemoModal from './FbxDemoModal.vue'
import FbxButton from '../../FbxButton/FbxButton.vue'

export default {
  components: { FbxDemoModal, FbxButton },
  methods: {
    openModal() {
      const modalName = 'my-modal-name'
      // this will be called via a dedicated vuex modal store
      // it's only here so that we can show the modal opening
      this.$modal.show(FbxDemoModal, { showText: true, modalName },
        {
          name: modalName,
          adaptive: true,
          scrollable: true,
          transition: 'box-transition',
          overlayTransition: 'overlay-transition',
          classes: 'fbx-ui-modal',
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
    beforeClose() {
      // console.log('before-close')
    },
    closed() {
      // console.log('closed')
    }
  }
}
</script>

<style lang="scss">

</style>
