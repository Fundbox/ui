<template>
  <div class="fbx-tabs">
    <div
      class="fbx-tab"
      v-for="(tab, i) in tabs"
      :key="i"
      :class="{ 'active': currentIndex === i }"
      @click="onTabClick(i)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FbxTabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTabIndex: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      currentIndex: this.activeTabIndex,
    }
  },
  methods: {
    onTabClick(i) {
      this.currentIndex = i
      this.$emit("tabIndexSelected", i)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";
@import "./../styles/utils/mixins";

.fbx-tabs {
  display: flex;
}

.fbx-tab {
  padding: 14px 30px;
  @include font(16);
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
</style>
