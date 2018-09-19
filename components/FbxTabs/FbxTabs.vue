<template>
  <div class="fbx-tabs">
    <fbx-tab v-for="tab in tabs" :data-qa="getDataQaForTab(tab)" :key="tab">
      {{ tab }}
    </fbx-tab>
  </div>
</template>

<script>
import FbxTab from "./FbxTab.vue"
import { toKebabCase } from "../../utils/utils.js"

export default {
  name: "FbxTabs",
  components: {
    FbxTab,
  },
  mounted() {
    console.log('hi', this.tabs)
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getDataQaForTab(tabName) {
      return toKebabCase(`${tabName}-tab`)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/utils/color-palette";

.fbx-tabs {}
</style>
