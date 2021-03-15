import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue).use(VueTheMask, {precision:4})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
