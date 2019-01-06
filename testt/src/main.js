/* eslint-disable no-new */
// main.js

import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'

import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
