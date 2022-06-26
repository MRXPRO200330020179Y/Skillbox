import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage';
import ProductPage from '@/pages/ProductPage';
import NotFoundPage from '@/pages/NotFoundPage';
import CartPape from '@/pages/CartPape';

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
    name: 'notFound',
    component: NotFoundPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router