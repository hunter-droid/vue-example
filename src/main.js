// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import httpData from './util/data.js'
import util from './util/util.js'

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'

Vue.prototype.$axios = axios

Vue.prototype.$httpData = httpData
Vue.prototype.$util = util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
