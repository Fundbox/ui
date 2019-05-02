<template>
  <article class="layout-row split vertical-center security-logos">
      <a
        class="security-logo security-logo-norton"
        href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=fundbox.com&amp;lang=en"
        target="_blank"
      />
      <a
        class="security-logo security-logo-bbb"
        target="_blank"
        href="http://www.bbb.org/greater-san-francisco/business-reviews/financial-services/fundbox-in-san-francisco-ca-462656#bbbseal"
        title="Fundbox, Inc. is a BBB Accredited Financial Service in San Francisco, CA"
      />
      <a
        class="security-logo security-logo-mcafee"
        href="https://www.mcafeesecure.com/verify?host=www.fundbox.com"
        target="_blank"
      />
    </article>
</template>

<script>
export default {
  name: 'FbxSafeAndSecure'
}
</script>

<style lang="scss" scoped>
@import "../../styles/utils/utilities.scss";

.security-logo {
  height: 45px;
  display: inline-block;
}

.security-logo-norton {
  background: url("./assets/logo_norton.svg") no-repeat 50% 90%;
  width: 85px;
  margin-right: 25px;
}

.security-logo-bbb {
  background: url("./assets/bbb@x2.png") left top no-repeat;
  background-size: 179px 34px;
  width: 89px;
  height: 34px;
  border-radius: 3px;
  margin-right: 25px;
}

.security-logo-mcafee {
  background: url("./assets/logo_mcafee.svg") no-repeat 50% 65%;
  width: 82px;
}
</style>
