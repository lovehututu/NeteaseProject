import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import FooterNav from './components/FooterNav/FooterNav.vue'

Vue.config.productionTip = false
// Vue.component('FooterNav', FooterNav)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
