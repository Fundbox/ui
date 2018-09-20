# FbxTabs

## Basic usage

- Pass an array of `tabs` and an optional `activeTabIndex` to `fbx-tabs`
- Listen to the `tabIndexSelected` event in order to know which tab has been selected.

```html
<fbx-tabs :tabs="tabs" :active-tab-index="currentIndex" @tabIndexSelected="onTabSelect" />
```
