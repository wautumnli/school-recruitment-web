import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/assets/css/global.css'

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
