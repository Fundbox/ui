<template>
  <div class="drop-down">
    <button class="drop-down-button fbx-icon-arrow-down" @click="dropDownButtonClicked" @focusout="clickedOutside"></button>
    <transition name="slide-down">
      <div class="drop-down-content" v-if="isMenuOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FbxDropdown',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    dropDownButtonClicked() {
      this.isMenuOpen = !this.isMenuOpen
    },
    clickedOutside() {
      // Delay closing by 200ms for UX purposes.
      setTimeout(() => this.isMenuOpen = false, 200)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/fonts/icomoon/style.css";

.drop-down {
  display: inline-block;
  position: relative;
}

.drop-down-button {
  cursor: pointer;
}

.drop-down-content {
  $positionFromTop: 120%;
  position: absolute;
  top: $positionFromTop;
  background: white;
  opacity: 1;
  transition: all 200ms ease-in-out;

  &.slide-down-enter, &.slide-down-leave-to {
    opacity: 0;
    top: 100%;
  }

  &.slide-down-enter-to, &.slide-down-leave {
    opacity: 1;
    top: $positionFromTop;
  }
}
</style>
