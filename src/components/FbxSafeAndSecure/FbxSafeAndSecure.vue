<template>
  <article class="safe-and-secure">
      <a v-once v-for="img in images" :key="img.ref" class="security-logo layout-row vertical-center" :href="img.ref" target="_blank">
        <img class="security-logo-image" :src="img.src" alt="">
      </a>
    </article>
</template>

<script>
import norton from './assets/security-norton-logo.svg'
import mcafee from './assets/security-mcafee-logo.svg'
import bbb from './assets/security-bbb-logo.png'

export default {
  name: 'FbxSafeAndSecure',
  data() {
    return {
      images: [
        { ref: 'https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=fundbox.com&amp;lang=en', src: norton },
        { ref: 'http://www.bbb.org/greater-san-francisco/business-reviews/financial-services/fundbox-in-san-francisco-ca-462656#bbbseal', src: bbb },
        { ref: 'https://www.mcafeesecure.com/verify?host=www.fundbox.com', src: mcafee },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@fundbox/ui/es/styles/utils/utilities.scss";

.safe-and-secure {
  display: flex;
}

.security-logo {
  position: relative;
  flex: 1 0 0;

  &:not(:last-child) {
    margin-right: 10%;
  }
}

.security-logo-image {
  width: 100%;
}
</style>
