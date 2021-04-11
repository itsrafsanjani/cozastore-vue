// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.prototype.$siteUrl = 'http://cozastore.test/'

axios.defaults.headers.get['KEY'] = '2ipNlTU99NRahaPYXE1foRggptypqFVaLj1DmJov'

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({

      baseURL: 'http://cozastore.test/api/'
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
