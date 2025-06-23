import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from '../pages/ArticlesList.vue'
import CreateArticle from '../pages/CreateArticle.vue'

const routes = [
  { path: '/', component: ArticlesList },
  { path: '/create', component: CreateArticle }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
