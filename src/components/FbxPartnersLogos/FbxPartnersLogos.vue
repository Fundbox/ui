<template>
  <div class="container">
    <div class="logo-container">
      <img class="logo" :src="PaypalLogo">
    </div>
    <div class="logo-container">
      <img class="logo" :src="IntuitLogo">
    </div>
    <div class="logo-container">
      <img class="logo" :src="SynchronyLogo">
    </div>
  </div>
</template>

<script>
import IntuitLogo from './logos/Intuit.svg'
import PaypalLogo from './logos/Paypal.svg'
import SynchronyLogo from './logos/Synchrony.svg'

export default {
  name: 'FbxPartnersLogos',
  data() {
    return { IntuitLogo, PaypalLogo, SynchronyLogo }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }

  .logo-container {
    flex: 33.33%;

    img {
      width: 100%;
    }
  }


</style>
