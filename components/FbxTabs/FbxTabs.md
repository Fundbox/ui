# FbxTabs

## Basic usage

- Pass an array to `fbx-tabs` and listen to the `tabSelected` event in order to know which tab is selected. The first tab is active by default.

```html
<fbx-tabs :tabs="tabs" @tabSelected="onTabSelect" />
```
