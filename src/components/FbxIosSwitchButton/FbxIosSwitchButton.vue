<template>
  <div>
    <label class="switch">
      <input
        class="input"
        type="checkbox"
        v-bind="$attrs"
        v-on="listeners"
        :value="value"
        :checked="value"
      >
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'FbxIosSwitchButton',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    debounceDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.triggerDebouncedListener(this.inputEmitter),
        change: this.triggerDebouncedListener(this.changeEmitter)
      }
    }
  },
  methods: {
    inputEmitter(event) {
      this.$emit('input', event.target.checked)
    },
    changeEmitter(event) {
      this.$emit('change', event.target.checked)
    },
    triggerDebouncedListener(listenerFn) {
      return this.debounceDisabled ? listenerFn : debounce(listenerFn, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/utils/color-palette";
  @import "../../styles/utils/mixins.scss";
  .switch {
    margin: 0;
    position: relative;
    display: inline-block;
    width: 39px;
    height: 22px;
  }

  .input {
    display: none;
    &:checked + .slider {
      background-color: $dark-green;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px $dark-green;
    }

    &:checked + .slider:before {
      transform: translateX(16px);
    }

  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $medium-gray;
    transition: $fast-ease;
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 3px;
      background-color: $white;
      transition: $fast-ease;
    }
    &.round {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }
</style>
