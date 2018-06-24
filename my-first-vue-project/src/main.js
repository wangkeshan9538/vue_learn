// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import {vue_store} from '@/store/vuex_store'

Vue.config.productionTip = false


console.log(vue_store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vue_store,
  components: { App },
  template: '<App/>'
})

