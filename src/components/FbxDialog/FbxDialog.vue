<template>
  <div class="fbx-dialog">
    <div class="fbx-dialog__header">
      <div class="fbx-dialog__title">{{ messageTitle }}</div>
      <fbx-close-button
        data-qa="dialog-close-button"
        class="fbx-dialog__close-button"
        @click="handleDismiss"
      />
    </div>

    <div class="fbx-dialog__body">
      <p class="fbx-dialog_text">
        {{ messageBody }}
      </p>

      <fbx-button
        data-qa="fbx-dialog__proceed_button"
        class="fbx-dialog__proceed_button"
        @click="handleProceed"
      >
        {{ rightBtnText }}
      </fbx-button>

      <a
        class="fbx-dialog__dismiss_button"
        data-qa="fbx-dialog__dismiss_button"
        @click="handleDismiss"
      >
        {{ leftBtnText }}
      </a>
    </div>
  </div>
</template>

<script>
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'

export default {
  name: 'FbxDialog',
  mixins: [VuejsDialogMixin],
  methods: {
    handleProceed() {
      this.proceed()
    },
    handleDismiss() {
      this.cancel()
    },
  },
}
</script>

<style lang="scss">
.dg-backdrop {
  // $medium-blue with $fbx-backdrop-opacity
  // if we're using the opacity rule then it affects the inner modal box
  background-color: rgba(44, 62, 80, 0.4);
}
.dg-main-content {
  max-width: 460px;
  padding: 0;
  border-radius: 0;
}
</style>

<style lang="scss" scoped>
@import "~fbx_common/src/styles/utils/mixins.scss";
@import "~fbx_common/src/styles/utils/color-palette.scss";

.fbx-dialog {
  position: relative;
  height: 100%;
  background-color: $white;
}

.fbx-dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $light-gray;
  @include viewport("md") {
    padding: 20px 30px;
  }
}

.fbx-dialog__title {
  @include font(24);
}

.fbx-dialog__close-button {
  font-size: 21px;
  line-height: 21px !important;
}

.fbx-dialog__body {
  padding: 30px;
  flex: 1;
  @include viewport("sm") {
    overflow-y: auto;
  }
}

.fbx-dialog_text {
  margin-bottom: 30px;
  @include font(16);
  color: $medium-blue;
}

.fbx-dialog__proceed_button {
  width: 100%;
}

.fbx-dialog__dismiss_button {
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  @include font(14);
  text-align: center;
  text-decoration: none;
}
</style>
