import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import router from './routes'

// Pli\ugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
