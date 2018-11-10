# FbxPanelRadioButton

## Basic usage

- Add `v-model` to each radio button, all referring to the same value
- Add a unique value to each radio button
- If you want to add icons, make sure to add them to each radio button
- Since the header text and body content are `slot`s, you can add any HTML content you want

```html
<fbx-panel-radio-button
  :iconPath="icon"
  v-model="myModelVariable"
  value="optionOne"
>
  <div slot="header">Header one</div>
  <div slot="body">
    <p>Body text</p>
    <br />
    <p>More body text</p>
  </div>
</fbx-panel-radio-button>

<fbx-panel-radio-button
  :iconPath="icon2"
  v-model="myModelVariable"
  value="optionTwo"
>
  <div slot="header">Option 2</div>
  <div slot="body">
    Dynamic HTML content <strong>is very handy</strong>
    <br />
    <pre>npm i -g npm</pre>
  </div>
</fbx-panel-radio-button>

<fbx-panel-radio-button
  :iconPath="icon3"
  v-model="myModelVariable"
  value="optionThree"
>
  <div slot="header">Option 3</div>
  <div slot="body">This option is the best</div>
</fbx-panel-radio-button>
```
