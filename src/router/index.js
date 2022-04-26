import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../components/List.vue')
  },
  {
    path: '/edit/{id}',
    name: 'Edit',
    component: () => import('../components/Edit.vue')
  },  
  {
    path: '/create',
    name: 'Create',
    component: () => import('../components/Create.vue')
  }  
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
