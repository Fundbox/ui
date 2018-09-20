# FbxTabs

## Basic usage

- Pass an array to `fbx-tabs`, the `activeTabIndex`, and listen to the `tabIndexSelected` event in order to know which tab is selected.

```html
<fbx-tabs :tabs="tabs" @tabIndexSelected="onTabSelect" />
```
