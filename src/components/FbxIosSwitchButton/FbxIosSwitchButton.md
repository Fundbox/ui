# FbxIosSwitchButton

## Basic usage

- `fbx-ios-switch-button` will inherit any attributes or event listeners because of the spreaded
- By default, @change will be debounced by 1500ms. To disable that, just pass :debounceDisabled

```html
<fbx-ios-switch-button
    name="my-button"
    id="my-id"
    data-qa="my-ios-switch-button-data-qa"
    tabindex="3"
    @change="onChange"
>
</fbx-ios-switch-button>
```



