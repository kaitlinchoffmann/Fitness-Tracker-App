import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma'; //this is a module within the bulma package
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
