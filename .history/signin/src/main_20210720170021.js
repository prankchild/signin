import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
Vue.use(Vant);
// axios.defaults.baseURL = "http://localhost:3010/"
axios.defaults.baseURL = "http://112.74.72.144:3010/"
axios.withCredentials = true
axios.defaults.withCredentials = true
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
