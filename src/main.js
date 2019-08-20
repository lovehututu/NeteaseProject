import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import FooterNav from './components/FooterNav/FooterNav.vue'

import './mock/mockserver'

Vue.config.productionTip = false
// Vue.component('FooterNav', FooterNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
