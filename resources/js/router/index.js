import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rank from '../views/Rank.vue'
import Help from '../views/Help.vue'
import Secret1 from '../views/secrets/Secret1.vue'
import Secret2 from '../views/secrets/Secret2.vue'
import Secret3 from '../views/secrets/Secret3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/ranking',
    name: 'Rank',
    component: Rank,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/secrets-d2s9qmtczg',
    name: 'Secret1',
    component: Secret1
  },
  {
    path: '/secrets-f2n5gufpe7',
    name: 'Secret2',
    component: Secret2
  },
  {
    path: '/secrets-zwffnd9eua',
    name: 'Secret3',
    component: Secret3
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
