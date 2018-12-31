<template>
  <div class="container">
    <div class="tile"
         v-for="tile in tiles"
         :key="tile.name"
         :class="tileClasses(tile)"
         :style="{ width: (100 / columns) + '%' }"
         @mouseenter="onHoverOverTile($event, tile)"
         @mouseleave="onHoverOverTile($event, tile)"
         @click="onClick(tile)"
    >
      <div class="tile-inner" >
        <template v-if="isTile(tile)">
          <img class="normal" :src="tile.imgNormal" :alt="tile.name" v-show="tile.isEnabled" />
          <img class="hover" :src="tile.imgHover" :alt="tile.name" />
          <img class="disabled" :src="tile.imgDisabled" :alt="tile.name" v-show="!tile.isEnabled" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { range } from 'lodash'
import { Tile } from './Tile'
import { noop } from '../../utils'

export default {
  name: 'FbxTileGrid',
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
        return column > 1 && column < 20
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
  methods: {
    tileClasses(tile) {
      return {
        placeholderTile: !this.isTile(tile),
        disabled: !tile.isEnabled,
        connected: tile.isConnected,
      }
    },
    isTile(tile) {
      return tile instanceof Tile
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
  $height: 75px;

  .container {
    // Negate the padding on tiles.
    margin: 0 (-$horizontal-spacing) (-$vertical-spacing) 0;
    display: flex;
    flex-wrap: wrap;
  }

  .tile {
    padding: 0 $horizontal-spacing $vertical-spacing 0;
    position: relative;
    height: $height;
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;

    &.placeholderTile {
      .tile-inner {
        border: 2px solid $white;
        background: transparent;
      }
    }

    &-inner {
      background: $white;
      width: 100%;
      height: 100%;
      transition: background-color 200ms ease-in-out;
      position:  relative;
    }

    img {
      transition: opacity 200ms ease-in-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 63%;
      max-height: 55%;
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

    &.connected {
      .tile-inner {
        border: 2px solid $dark-green;

        // Connected state check icon. Visual only.
        &:after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 15px;
          height: 15px;
          background: url("../../assets/icon-check-white.svg") $dark-green no-repeat 65% 40%;
        }
      }
    }
  }
</style>
