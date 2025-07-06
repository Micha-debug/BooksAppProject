import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from '../pages/ArticlesList.vue'

const routes = [
  { path: '/', component: ArticlesList }
]

const router = createRouter({
  history: createWebHistory('/BooksAppProject/'),
  routes
})

export default router
