# FbxModalWrapper

#### Note: This component is only the wrapping of a modal to contain it's `header`, `body`, `close-button` and their styles and should be used in conjuction with the vuex modal store.
## Usage

* All modals should implement a `fbx-modal-wrapper` tag.
* `fbx-modal-wrapper` attributes:
    * `title` the modal's title to render. Omitting it will render a modal without the header but only a close button.
    * `close-btn-data-qa` should be unique per modal. This will be the close button data-qa value for testing purposes.
    * `on-close` optional close handler - will be invoked by the destroy lifecycle method of `fbx-modal-wrapper`.
    * `is-loading` will render the loader instead of the slotted children till the loading is `false`.
* On desktop viewport sizes A modal has a default width of 600px and it's height set to `auto` to fit it's content.
    * `width` can be overriden by placing a media query on the specific modal implementation scss
* On mobile viewport sizes we enforce the modal to capture the whole screen dimensions.

```html
<fbx-modal-wrapper
  title="BASIC MODAL TITLE"
  close-btn-data-qa="basic-modal-close-btn"
  :on-close="onClose"
  @close-btn-clicked="onCloseBtnClicked"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>
```
```html
<fbx-modal-wrapper
  title="LOADING MODAL TITLE"
  close-btn-data-qa="loading-modal-close-btn"
  :is-loading="true"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>

```
```html
<fbx-modal-wrapper
  close-btn-data-qa="no-title-modal-close-btn"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>
```
```html
<fbx-modal-wrapper
  title="SCROLLABLE MODAL TITLE"
  close-btn-data-qa="scrollable-modal-close-btn"
>
  <div>some more text</div>
  <div>some more text</div>
  <div>some more text</div>
  ...
</fbx-modal-wrapper>
```
