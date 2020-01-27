import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
import { mockBackend } from './__mock__/back.mock';
mockBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
