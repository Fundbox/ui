const { VERSION } = require('../package.json')
import * as components from './components'
import * as directives from './directives'
import './validations'
import { vueUse } from './utils/plugins'

const FundboxUI = {
  install(Vue) {
    if (Vue.fundbox_ui_installed) return
    Vue.fundbox_ui_installed = true

    const use = plugin => Vue.use(plugin)
    Object.values(components).forEach(use)
    Object.values(directives).forEach(use)
  },
  version: VERSION
}

vueUse(FundboxUI)
export default FundboxUI
