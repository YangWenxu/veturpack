import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import * as api from './api'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

Vue.prototype.$api = api

export { app, router, store }
