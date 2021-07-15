import { createWebHistory, createRouter } from "vue-router";
import { LandingPageRoutes } from '@/router/landingpage.routes.js'

const routes = [
  ...LandingPageRoutes,
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
