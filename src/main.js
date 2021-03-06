import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'primevue/resources/themes/nova/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue).use(BootstrapVueIcons).use(VueTheMask).use(Vuelidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
