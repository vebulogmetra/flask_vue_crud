import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from '@/components/Ping';
import Books from '@/components/Books';

Vue.use(VueRouter)



const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
  ],
  mode: 'history',
})

export default router
