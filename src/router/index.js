import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/layout/admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: admin,
      children: [
        {
          path: '/',
          component: import('../views/index.vue')
        }
      ]
    }
  ]
})

export default router
