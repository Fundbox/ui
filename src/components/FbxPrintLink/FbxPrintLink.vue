<template>
  <div class="fbx-print-link">
    <div v-if="withIcon" class="fbx-icon-printer"></div>
    <a href="#" @click="onPrintButtonClick">Print this agreement</a>
  </div>
</template>

<script>
import xss from 'xss'

export default {
  name: 'FbxPrintLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    htmlContent: {
      type: String,
      required: true,
    },
    withIcon: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onPrintButtonClick() {
      const htmlToPrint = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>${xss(this.title)}</title>
          </head>
          <body>
            <h1>${xss(this.title)}</h1>
            <div>${xss(this.htmlContent)}</div>
          </body>
        </html>
      `
      const newWindow = window.open()
      newWindow.document.documentElement.innerHTML = htmlToPrint
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
