import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(VueParticles)
axios.defaults.baseURL = "http://localhost:3000/"
axios.withCredentials = true
axios.defaults.withCredentials = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
