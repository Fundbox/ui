<template>
  <ul class="steps-container layout-row">
    <li v-for="(step, index) in steps" :key="index + step" class="step flex" :class="{ active: isStepActive(index), done: isStepDone(index) }">
      <div class="step-number-wrapper"><span class="step-number">{{ index + 1 }}</span></div>
      <div class="step-label">{{ step }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FbxStepper',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    activeStep: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    isStepActive(index) {
      return index === this.activeStep
    },
    isStepDone(index) {
      return index < this.activeStep
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@fundbox/ui/es/styles/utils/utilities.scss";

$stepNumberSize: 24px;

.step {
  text-align: center;
  color: $medium-blue;
  font-size: 13px;

  &:not(:first-child) .step-number-wrapper:before, &:not(:last-child) .step-number-wrapper:after {
    content: "";
  }

  &.active  {
    .step-number {
      background: $medium-blue;
      color: $white;
    }
  }

  &.done .step-number{
    background: $medium-blue;
    &:before {
      content: url("~@fundbox/ui/es/assets/v-icon.min.svg");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
    }
  }
}

.step-number {
  position: relative;
  display: inline-block;
  border: 2px solid $medium-blue;
  background: $white;
  border-radius: 50%;
  width: $stepNumberSize;
  height: $stepNumberSize;
  line-height: $stepNumberSize - 2px;
}

.step-number-wrapper {
  position: relative;

  &:before, &:after {
    position: absolute;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    width: 50%;
    background: $medium-blue;
  }

  &:before {
    left: 0;
  }

  &:before {
    right: 0;
  }
}

.step-label {
  padding-top: 10px;
  font-weight: 300;
}
</style>
