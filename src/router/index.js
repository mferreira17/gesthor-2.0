import Vue from 'vue'
import VueRouter from 'vue-router'
import Sobre from '../views/Sobre.vue'
import Dashboard from '../views/Dashboard.vue'
import Contrato from '../views/Contrato.vue'
import Empresa from '../views/Empresa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'index',
    component : Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/sobre',
    name:'Sobre',
    component : Sobre
  },
  {
    path: '/novo-contrato',
    name: 'Novo Contrato',
    component : Contrato
  },
  {
    path: '/nova-empresa',
    name: 'Nova Empresa',
    component : Empresa
  }
]

const router = new VueRouter({
  routes
})

export default router
