# FbxModalWrapper

#### Note: This component is only the wrapping of a modal to contain it's `header`, `body`, `close-button` and their styles and should be used in conjuction with the vue modal service.
## Basic usage

* All modals should implement a `fbx-modal-wrapper` tag and pass it some mandatory attributes:
    * `title` is well... the modal's title.
    * `close-btn-data-qa` should be unique per modal. This will be the close button data-qa value for testing purposes.
    * `modal-name` is passed so that the close button will reference the modal to close.
* On desktop viewport sizes A modal has a height of 300px and width of 600px.
    * These values can be overriden by placing a media query on the specific modal implementation scss
* On mobile viewport sizes we enforce the modal to capture the whole screen dimensions.

```html
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

```


