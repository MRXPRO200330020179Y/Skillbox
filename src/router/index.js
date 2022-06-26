import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage';
import ProductPage from '@/pages/ProductPage';
import CartPape from '@/pages/CartPape';
import Look404 from '@/pages/Look404';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },

  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage
  },

  {
    path: '/cart',
    name: 'cart',
    component: CartPape
  },

  {
    path: '*',
    name: 'Look404',
    component: Look404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router