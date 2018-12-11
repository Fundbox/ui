<template>
  <div class="container">
    <div class="tile" :class="classes(tile)" v-for="tile in tiles" :key="tile.imgPath">
      <template v-if="typeof tile === 'object'">
        <img class="normal" :src="tile.imgNormal" :alt="tile.name">
        <img class="hover" :src="tile.imgHover" :alt="tile.name">
        <img class="disabled" :src="tile.imgDisabled" :alt="tile.name">
      </template>
    </div>
  </div>
</template>

<script>
import { range } from 'lodash'
export default {
  name: 'FbxTileGrid',
  props: {
    columns: {
      type: Number,
      default: 0,
    },
    tileData: {
      type: Array,
      required: true,
    },
    shouldShowPlaceholders: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    classes(tile) {
      return {
        placeholderTile: typeof tile === 'number'
      }
    }
  },
  computed: {
    tiles() {
      if (this.shouldShowPlaceholders) {
        // Calculate how many placeholder tiles to add to the array.
        const numberOfTiles = this.tileData.length
        const overBy = numberOfTiles % this.columns
        const rest = overBy === 0 ? 0 : this.columns - overBy
        return this.tileData.concat(range(0, rest))
      } else {
        return this.tileData
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../../styles/utils/color-palette";

  .placeholderTile {
    border: 1px solid $light-gray;
  }
</style>
