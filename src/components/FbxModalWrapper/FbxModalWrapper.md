# FbxModalWrapper

#### Note: This component is only the wrapping of a modal to contain it's `header`, `body`, `close-button` and their styles and should be used in conjuction with the vuex modal store.
## Usage

* All modals should implement a `fbx-modal-wrapper` tag.
* `fbx-modal-wrapper` attributes:
    * `title` the modal's title to render. Omitting it will render a modal without the header but only a close button.
    * `close-btn-data-qa` should be unique per modal. This will be the close button data-qa value for testing purposes.
    * `modal-name` is passed as prop into `FbxModalWrapper` so that firing `this.$modal.hide(modalName)` anywhere will have a reference to which modal it should close.
    * `is-loading` will render the loader instead of the slotted children till the loading is `false`.
* `this.$modal.hide` can accept an object as a second argument. This object can be referenced in `before-close` callback handler.
* On desktop viewport sizes A modal has a default width of 600px and it's height set to `auto` to fit it's content.
    * `width` can be overriden by placing a media query on the specific modal implementation scss
* On mobile viewport sizes we enforce the modal to capture the whole screen dimensions.

```html
<fbx-modal-wrapper
  title="BASIC MODAL TITLE"
  close-btn-data-qa="basic-modal-close-btn"
  :modal-name="modalName"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>
```
```html
<fbx-modal-wrapper
  title="LOADING MODAL TITLE"
  close-btn-data-qa="loading-modal-close-btn"
  :modal-name="modalName"
  :is-loading="true"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>

```
```html
<fbx-modal-wrapper
  close-btn-data-qa="no-title-modal-close-btn"
  :modal-name="modalName"
>
  <div v-if="showText">I am shown when showText is true</div>
  <div>some more text</div>
</fbx-modal-wrapper>
```
```html
<fbx-modal-wrapper
  title="SCROLLABLE MODAL TITLE"
  close-btn-data-qa="scrollable-modal-close-btn"
  :modal-name="modalName"
>
  <div>some more text</div>
  <div>some more text</div>
  <div>some more text</div>
  ...
</fbx-modal-wrapper>
```
