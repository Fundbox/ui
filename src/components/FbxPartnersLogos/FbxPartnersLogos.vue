<template>
  <div class="partners-logos layout-column vertical-center horizontal-center">
    <label class="partners-logo-label">We work with great partners</label>
    <div class="logos layout-row horizontal-center">
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
  @import "~@fundbox/ui/es/styles/utils/color-palette";
  @import "~@fundbox/ui/es/styles/utils/mixins";

  .partners-logos {
    background-color: $extra-light-gray;
    width: 100%;
    padding: 35px;

    @include viewport("lg") {
      flex-direction: row;
    }

    .partners-logo-label {
      color: $medium-blue;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      @include viewport("lg") {
        margin-right: 40px;
        font-size: 18px;
        line-height: 22px;
      }
    }

    .logos {
      max-width: 600px;
      margin: 0;
      flex-wrap: wrap;
      font-size: 10px;

      .logo-container {
        margin: 0 25px;

        img {
          height: 50px;
        }
      }
    }
  }

</style>
