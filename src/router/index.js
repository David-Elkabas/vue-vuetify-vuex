import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recipe from '../views/Recipe.vue'
import TestOnly from '../views/TestOnly.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/testonly',
    name: 'testOnly',
    component: TestOnly
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
