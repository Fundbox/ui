# FbxTextField

## Basic usage

- Use `FbxTextField` for inputs of common types, e.g. `type="text"`, `type="email"`. If your input type isn't supported, open up a PR to add support for that input type
- The default `type` is `text`, if you don't provide one
- You can pass a `mask` prop to set up masking. See more info [here](https://www.npmjs.com/package/v-mask)
- To use `address-autocomplete` feature you need to sync the data via the provided events.
When the user selects an address it will trigger `addressStringChanged` with the string value, use this to update the v-model value to make sure it syncs with the user's selection
The selection also triggers `addressDataChanged` with the selected address raw data. Use this to get the actual address data. 

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
  @addressStringChanged="onAddressStringChanged"
/>
```
