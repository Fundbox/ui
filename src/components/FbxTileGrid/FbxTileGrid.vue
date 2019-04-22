<template>
  <div class="container">
    <div class="tile-wrapper"
      v-for="tile in tiles"
      :style="{ width: (100 / columns) + '%' }"
      :key="tile.name"
      @click="onClick(tile)"
    >
      <fbx-tile
        :tile="tile"
      >
      </fbx-tile>
    </div>
  </div>
</template>

<script>
import { noop } from '../../utils'
import FbxTile from '../FbxTile/FbxTile'
import { Tile } from '../FbxTile/models/Tile'

export default {
  name: 'FbxTileGrid',
  components: { FbxTile },
  data() {
    return {
      localTiles: this.tileData,
    }
  },
  props: {
    tileData: {
      type: Array,
      required: true,
      validator(tiles) {
        return tiles.every(tile => tile instanceof Tile)
      }
    },
    columns: {
      type: Number,
      default: 1,
      validator(column) {
        return column > 0 && column < 20
      }
    },
    shouldShowPlaceholders: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default() {
        return noop()
      },
    },
  },
  computed: {
    tiles() {
      if (this.shouldShowPlaceholders) {
        // Calculate how many placeholder tiles to add to the array.
        const numberOfTiles = this.localTiles.length
        const overBy = numberOfTiles % this.columns
        const rest = overBy === 0 ? 0 : this.columns - overBy
        const placeholderTiles = Array(rest).fill(new Tile())
        return this.localTiles.concat(placeholderTiles)
      } else {
        return this.localTiles
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../../styles/utils/color-palette";

  $horizontal-spacing: 10px;
  $vertical-spacing: 10px;
  $height: 75px;

  .container {
    // Negate the padding on tiles.
    margin: 0 (-$horizontal-spacing) (-$vertical-spacing) 0;
    display: flex;
    flex-wrap: wrap;
  }

  .tile-wrapper {
    padding: 0 $horizontal-spacing $vertical-spacing 0;
    height: $height + $vertical-spacing;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
  }
</style>
