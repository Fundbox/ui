# FbxTextField

## Basic usage

- Use `FbxTextField` for inputs of common types, e.g. `type="text"`, `type="email"`. If your input type isn't supported, open up a PR to add support for that input type
- The default `type` is `text`, if you don't provide one
- If you want to add a `data-qa`, add it as a prop with `:data-qa="my-data-qa"`. If you add it as a regular attribute instead, it will go on the `input` element, which has `v-bind="$attrs"`
- You can pass a `mask` prop to set up masking. See more info [here](https://www.npmjs.com/package/v-mask)

🚨Note: you cannot currently use both `clearable` and `type="password"` as the Show/Hide and X buttons overlap 🚨

```html
<!-- Example Usage -->
<fbx-text-field
  name="email"
  class="email-field"
  validations="required|email"
  placeholder="Enter your email address"
  :label="'Email Address'"
  v-model.trim="email"
  :data-qa="my-email-qa"
/>

<!-- Example Usage with mask -->
<fbx-text-field
  mask="(###) ###-####"
  name="phone"
  class="input"
  validations="required"
  placeholder="Enter your phone number"
  :label="labelText"
  v-model="inputText"
/>

<!-- Example Usage with address -->
<fbx-text-field
  address-autocomplete
  :validations="{
    addressRequired: addressData,
    addressInsideUSA: addressData,
    fullAddress: addressData
  }"
  name="phone"
  class="input"
  placeholder="Enter your address"
  v-model="inputText"
  @addressDataChanged="onAddressDataChanged"
/>

<!-- Example Usage with a clear icon -->
<fbx-text-field
  validations="required"
  name="phone"
  class="input"
  placeholder="Enter your search"
  v-model="inputText"
  clearable
/>

<!-- Example Usage with currency -->
<fbx-text-field
  validations="required"
  name="amount"
  class="input"
  placeholder="Enter an amount"
  v-model="inputText"
  currency
/>
```

<!-- Example Usage with editable field -->
<fbx-text-field
  validations="required"
  name="word"
  class="input"
  placeholder="Enter a word"
  v-model="inputText"
  editable
/>
```
