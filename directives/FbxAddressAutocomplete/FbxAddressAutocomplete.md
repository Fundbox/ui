# FbxAddressAutocomplete

## Basic usage

- Use `fbx-address-autocomplete` to add google places autocomplete functionality to an input element
- `FbxAddressAutocomplete` uses google maps API to load a suggestion drop down
- To use with `FbxTextField` simply pass a `address-autocomplete` and it will add the directive internally

```html
<!-- Example Usage -->
<input v-fbx-address-autocomplete />
<fbx-text-field address-autocomplete />
```
