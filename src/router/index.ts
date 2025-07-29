import HomeView from '@/views/HomeView.vue'
import { createWebHistory, createRouter, type RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/product', component: () => import('@/views/ProductView.vue'), name: 'product' },
  { path: '/info', component: () => import('@/views/InfoView.vue'), name: 'info' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (from.name === undefined || !document.startViewTransition) {
    return next()
  }

  document.startViewTransition(() => {
    next()
  })
})

export default router
