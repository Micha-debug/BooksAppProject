import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ✅ корректно
  routes: [
    { path: '/', component: HomePage }
  ]
})
