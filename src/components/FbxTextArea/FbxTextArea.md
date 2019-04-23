# FbxTextArea

## Basic usage

- Use `FbxTextArea` whenever you need an HTML `<textarea>`
- You can pass a resize option as a prop ('none', 'both', 'horizontal', and 'vertical')
- If you pass a `max-length` value, you'll get a counter that will let the user know how many characters they have left

```html
<!-- Example usage with label -->
<fbx-text-area
  label="Order Details"
  name="myTextArea"
  placeholder="Write your details here"
  v-model="inputText"
  data-qa="my-text-area"
/>

<!-- Example usage with character count -->
<fbx-text-area
  name="myTextArea"
  placeholder="Write something here..."
  v-model="inputText"
  :max-length="200"
/>

<!-- Example usage with resize -->
<fbx-text-area
  name="myTextArea"
  placeholder="Write something here..."
  resize="vertical"
  v-model="inputText"
/>
```
