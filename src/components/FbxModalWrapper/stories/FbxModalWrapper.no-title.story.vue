<template>
  <div class="demo-modal">
    <fbx-button @click="openModal">
      Open modal with no title
    </fbx-button>
  </div>
</template>

<script>
import FbxNoTitleModal from './FbxModal.no-title.vue'
import FbxButton from '../../FbxButton/FbxButton.vue'

export default {
  components: { FbxButton },
  methods: {
    openModal() {
      const modalName = 'my-modal-name'
      // this will be called via a dedicated vuex modal store
      // it's only here so that we can show the modal opening
      this.$modal.show(FbxNoTitleModal, { showText: true, modalName },
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
    beforeClose({ params }) { // eslint-disable-line no-unused-vars
      // you can pass params when calling this.$modal.hide(modalName, { param1, param2 })
      // console.log('closed with params', params)
    },
    closed() {
      // console.log('closed')
    }
  }
}
</script>

<style lang="scss">

</style>
