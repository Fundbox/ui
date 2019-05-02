<template>
  <div class="fbx-print-link">
    <div v-if="showPrintIcon" class="fbx-icon-printer"></div>
    <a href="#" @click="onPrintButtonClick">Print this agreement</a>
  </div>
</template>

<script>
import escape from 'lodash/escape'
import sanitizeHTML from 'sanitize-html'

export default {
  name: 'FbxPrintLink',
  props: {
    printTitle: {
      type: String,
      required: true,
    },
    printContent: {
      type: String,
      required: true,
    },
    showPrintIcon: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onPrintButtonClick() {
      const printContent = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>${escape(this.printTitle)}</title>
          </head>
          <body>
            <h1>${escape(this.printTitle)}</h1>
            <div>${sanitizeHTML(this.printContent)}</div>
          </body>
        </html>
      `
      const newWindow = window.open()
      newWindow.document.documentElement.innerHTML = printContent
      newWindow.focus()
      newWindow.print()
    },
  },
}
</script>

 <style lang="scss" scoped>
@import "../../styles/utils/color-palette.scss";

.fbx-print-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: $dark-green;
}

.fbx-icon-printer {
  margin-right: 5px;
}
</style>
