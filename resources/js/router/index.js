import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rank from '../views/Rank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'スクロール大会', desc: 'みんなでスクロールした距離で競い合ったら面白いんじゃね？と風呂入ってたら思った' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'スクロール大会 | ランキング', desc: 'みんなでスクロールした距離で競い合った結果' }
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
    meta: { title: 'スクロール大会について', desc: 'みんなでスクロールした距離で競い合ったら面白いんじゃね？と風呂は言ってたら思った' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
