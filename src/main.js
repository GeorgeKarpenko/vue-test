import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMeta from 'vue-meta'
import App from './App'
import VueResource from 'vue-resource'
//import VueWebsocket from "vue-websocket"
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
//import VueSocketIO from 'vue-socket.io'
//import store from '../db'
//import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

Vue.use(VueResource,VueAxios, axios, BootstrapVue)
Vue.use(VueMeta)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
