import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store'
import routes from './routes/routes'

const router = new VueRouter({
  mode: 'history',
  routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
