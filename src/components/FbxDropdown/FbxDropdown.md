# FbxDropdown
A dropdown menu with a slot the content of the dropdown itself.

Intentionally, the dropdown itself is almost unstyled (besides for positioning) 
to make this component as customizable as possible. 
So you have to take care if styling the inside of the dropdown yourself.
Basically this component includes the down arrow button that opens up the slot 
content in an absolutely positioned container.  

### Usage
```html
<template>
  <div class="drop-down-wrapper">
    Some Menu text
    <fbx-dropdown>
      <a href="#">Help & Support</a>
      <a href="#">Agreement</a>
      <a href="#">Logout</a>
    </fbx-dropdown>
  </div>
</template>

<script>
import FbxDropdown from '../FbxDropdown.vue'
export default {
  components: { FbxDropdown },
}
</script>

<style lang="scss" scoped>
@import "./../../../styles/utils/color-palette.scss";
a {
  padding: 3px 12px;
  color: $medium-blue;
  white-space: nowrap;
  font-weight: 300;
  font-size: 14px;
  display: block;

  &:last-child {
    border-top: 1px solid $medium-gray;
  }

  &:hover {
    background: $medium-blue;
    color: white;
  }
}
</style>

<style lang="scss">
@import "./../../../styles/utils/color-palette.scss";
.drop-down-content {
  border: 1px solid $medium-gray;
}
</style>
```
