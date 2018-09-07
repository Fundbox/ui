# FbxButton

## Basic usage
- Pass any HTML attribute or native DOM event to `fbx-button`
- When `:loading` is `true`, a spinning icon will replace the button text, and the user will not be able to click the button again until loading has finished and is `false`
- Button text is passed as a `<slot>`

```html
<fbx-button
    name="my-button"
    id="my-id"
    data-qa="my-button-qa"
    tabindex="3"
    @click="onClick"
    :loading="isSubmittingForm"
>
  My Button Text
</fbx-button>
```

## Disabled button

- Use `disable` like you would on a normal HTML button. Note: `disabled` here is not a Vue prop, but a regular HTML attribute

```html
<fbx-button
  @click="onClick"
  :disabled="shouldButtonBeDisabled"
>
  My Button Text
</fbx-button>
```

## Inverse button

- Reverse the background color and font color by passing `true` for the `:inverse` prop
- Do not use this prop if you just want a regular `<a>` element

```html
<fbx-button
  @click="onClick"
  :inverse="true"
>
  My Button Text
</fbx-button>
```
