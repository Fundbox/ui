<template>
  <div class="trustpilot-widget" :data-locale="locale" :data-template-id="templateId" :data-businessunit-id="businessunitId" :data-style-height="height" :data-style-width="width" data-theme="light">
    <a class="fallback" :href="fallbackLink" target="_blank" rel="noopener">Trustpilot</a>
  </div>
</template>

<script>

import { loadScript } from '../../utils/script-loader.js'

function getTrustPilotUrl(version) {
  return `//widget.trustpilot.com/bootstrap/${version}/tp.widget.bootstrap.min.js`
}

export default {
  name: 'FbxTrustPilotBox',
  props: {
    templateId: {
      type: String,
      required: true,
    },
    businessunitId: {
      type: String,
      required: true,
    },
    fallbackLink: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '150px',
    },
    width: {
      type: String,
      default: '100%',
    },
    locale: {
      type: String,
      default: 'en-US',
    },
    version: {
      type: String,
      default: 'v5',
    },

  },
  async mounted() {
    await loadScript(getTrustPilotUrl(this.version))
    window.Trustpilot.loadFromElement(this.$el)
  },
}

</script>
