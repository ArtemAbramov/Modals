import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

// Pli\ugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
