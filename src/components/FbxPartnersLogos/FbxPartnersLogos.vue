<template>
  <div class="partners-logos">
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
  $margin: 25px;
  .partners-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -$margin;

    .logo-container {
      flex: 33.33%;
      min-width: 140px;
      max-width: 140px;
          margin: 0 $margin;

      img {
        width: 100%;
      }
    }
  }


</style>
