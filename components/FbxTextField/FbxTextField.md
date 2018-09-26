# FbxTextField

## Basic usage

- Use `FbxTextField` for inputs of common types, e.g. `type="text"`, `type="email"`. If your input type isn't supported, open up a PR to add support for that input type
- The default `type` is `text`, if you don't provide one

```html
<!-- Example Usage -->
<fbx-text-field
  name="email"
  class="email-field"
  validations="required|email"
  placeholder="Enter your email address"
  :label="'Email Address'"
  v-model.trim="email"
  data-qa="my-email-qa"
/>
```
