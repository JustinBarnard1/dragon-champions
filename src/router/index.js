import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Game from '../pages/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games/:id',
    name: 'Game',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

export default router
