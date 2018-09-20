<template>
  <div class="fbx-tabs">
    <div
      class="fbx-tab"
      v-for="(tab, i) in tabs"
      :key="tab"
      :class="{ 'active': currentTabIndex === i }"
      @click="onTabClick(i)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FbxTabs",
  data() {
    return {
      currentTabIndex: 0,
    }
  },
  props: {
    tabs: Array,
  },
  methods: {
    onTabClick(i) {
      this.currentTabIndex = i
      this.$emit("tabSelected", this.tabs[i])
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";
@import "./../styles/utils/mixins";

.fbx-tabs {
  display: flex;

  .fbx-tab {
    flex: 1;
    padding: 0 14px;
    @include font(16);
    line-height: 45px;
    color: $medium-blue;
    background-color: $light-gray;
    border: 1px solid $medium-gray;
    text-align: center;
    cursor: pointer;

    & + .fbx-tab {
      border-left: none;
    }

    &.active {
      font-weight: 500;
      background-color: $white;
      border-bottom: 1px solid $white;
      cursor: default;
    }
  }
}
</style>
