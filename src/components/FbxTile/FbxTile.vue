<template>
  <div class="tile"
       :class="tileClasses"
       @mouseenter="onHoverOverTile($event)"
       @mouseleave="onHoverOverTile($event)"
  >
    <template v-if="!isPlaceHolder">
      <img class="normal" :src="tile.imgNormal" :alt="tile.name" v-show="tile.isEnabled" />
      <img class="hover" :src="tile.imgHover" :alt="tile.name" />
      <img class="disabled" :src="tile.imgDisabled" :alt="tile.name" v-show="!tile.isEnabled" />
    </template>
  </div>
</template>

<script>
import { Tile } from '../FbxTileGrid'

export default {
  name: 'FbxTile',
  props: {
    tile: {
      type: Tile,
      required: true,
      validator(tile) {
        return tile instanceof Tile
      },
    },
  },
  computed: {
    isPlaceHolder() {
      return !(this.tile.name && this.tile.imgNormal && this.tile.imgHover && this.tile.imgDisabled)
    },
  },
  tileClasses() {
    return {
      placeholderTile: this.isPlaceHolder,
      disabled: !this.tile.isEnabled,
      connected: this.tile.isConnected,
    }
  },
  methods: {
    onHoverOverTile(hoverEvent) {
      if (this.tile.isEnabled) {
        let tileElement = hoverEvent.target
        if (hoverEvent.type === 'mouseenter') {
          tileElement.style.background = this.tile.hoverColor
        } else {
          tileElement.style.background = ''
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../../styles/utils/color-palette";

  .tile {
    cursor: pointer;
    background: $white;
    width: 100%;
    height: 100%;
    transition: background-color 200ms ease-in-out;
    position:  relative;

    &.placeholderTile {
      border: 2px solid $white;
      background: transparent;
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
</style>
