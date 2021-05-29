import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8082'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
