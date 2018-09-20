# FbxTabs

## Basic usage

- Pass the required props `tabs` and `activeTabIndex` to `fbx-tabs`
- Listen to the `tabIndexSelected` event in order to know which tab has been selected.

```html
<fbx-tabs :tabs="tabs" :active-tab-index="currentIndex" @tabIndexSelected="onTabSelect" />
```
