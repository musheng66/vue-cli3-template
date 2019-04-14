import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui/element.js'

import './permission' // 权限

import '@/styles/index.scss' // 全局 css

import '@/assets/icons' // svg-icon
import i18n from './locales/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
