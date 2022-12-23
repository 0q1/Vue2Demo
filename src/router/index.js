import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: () => import( '../views/ShopCar.vue')
  },
  {
    path: '/newsCenter',
    name: 'newsCenter',
    component: () => import( '../views/NewsCenter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
