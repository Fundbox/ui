<template>
  <div class="wrapper">
    <h1>Drop down menu with text</h1>
    <div class="drop-down-wrapper">
      Some Menu text
      <fbx-dropdown>
        <a href="#">Help & Support</a>
        <a href="#">Agreement</a>
        <a href="#">Logout</a>
      </fbx-dropdown>
    </div>
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

.wrapper {
  padding: 20px;
}

.drop-down-wrapper {
  background: $light-gray;
  padding: 50px;
}

pre {
  background: $light-gray;
  padding: 20px;
}

h1 {
  border-bottom: 1px solid lightblue;
  margin-bottom: 20px;
}

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
