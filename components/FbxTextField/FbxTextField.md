# FbxTextField

## Basic usage

- Cool description

```html
<fbx-text-field
  name="email"
  class="input"
  validations="required|email"
  placeholder="Enter your email address"
  :label="'Email Address'"
  v-model.trim="email"
  data-qa="login-email"
/>
```
