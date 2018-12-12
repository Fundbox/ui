<template>
  <div class="container">
    <div class="tile" :class="tileClasses(tile)" v-for="tile in tiles" :key="tile.name" @mouseenter="onHoverOverTile($event, tile)" @mouseleave="onHoverOverTile($event, tile)">
      <div class="tile-inner" >
        <template v-if="typeof tile === 'object'">
          <img class="normal" :src="tile.imgNormal" :alt="tile.name" v-show="tile.isEnabled">
          <img class="hover" :src="tile.imgHover" :alt="tile.name">
          <img class="disabled" :src="tile.imgDisabled" :alt="tile.name" v-show="!tile.isEnabled">
        </template>
      </div>
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
    tileClasses(tile) {
      return {
        placeholderTile: typeof tile === 'number',
        disabled: !tile.isEnabled,
        connected: tile.isConnected,
      }
    },
    onHoverOverTile(hoverEvent, tile) {
      if (tile.isEnabled) {
        let tileInner = hoverEvent.target.children[0]
        if (hoverEvent.type === 'mouseenter') {
          tileInner.style.background = tile.hoverColor
        } else {
          tileInner.style.background = ''
        }
      }
    },
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

  $horizontal-spacing: 10px;
  $vertical-spacing: 10px;

  .container {
    // Negate the padding on tiles.
    margin: 0 (-$horizontal-spacing) (-$vertical-spacing) 0;
  }

  .tile {
    padding: 0 $horizontal-spacing $vertical-spacing 0;
    position: relative;
    height: 100px;
    cursor: pointer;

    &-inner {
      background: $white;
      width: 100%;
      height: 100%;
      transition: background-color 200ms ease-in-out;
    }

    img {
      transition: opacity 200ms ease-in-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .hover {
      opacity: 0;
    }

    &:hover {
      .hover {
        opacity: 1;
      }
      .normal {
        opacity: 0;
      }
    }

    &.disabled {
      cursor: not-allowed;
    }
  }

  .placeholderTile {
    border: 1px solid $white;
  }
</style>
