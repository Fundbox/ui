<template>
  <div class="partners-logos">
    <div class="logo-container">
      <img class="partner-logo" :src="PaypalLogo">
    </div>
    <div class="logo-container">
      <img class="partner-logo" :src="QuickbooksLogo">
    </div>
    <div class="logo-container">
      <img class="partner-logo" :src="SynchronyLogo">
    </div>
  </div>
</template>

<script>
import QuickbooksLogo from './logos/Quickbooks.svg'
import PaypalLogo from './logos/Paypal.svg'
import SynchronyLogo from './logos/Synchrony.svg'

export default {
  name: 'FbxPartnersLogos',
  data() {
    return { QuickbooksLogo, PaypalLogo, SynchronyLogo }
  },
}
</script>

<style lang="scss" scoped>
  .partners-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .logo-container {
      margin: 0 25px;

      img {
        height: 50px;
      }
    }
  }


</style>
