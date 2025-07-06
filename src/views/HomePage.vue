<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Платформа статей ✍️</h1>

    <div class="flex items-center space-x-4 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск по статьям..."
        class="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        v-model="sortBy"
        class="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="date">Сортировка по дате</option>
        <option value="rating">Сортировка по рейтингу</option>
      </select>
    </div>

    <ArticleForm @article-created="addArticle" :articleToEdit="articleToEdit" />

    <ArticlesList
      :articles="filteredAndSortedArticles"
      @edit-article="editArticle"
      @delete-article="deleteArticle"
      @rate-article="updateRating"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ArticleForm from '../pages/ArticleForm.vue'
import ArticlesList from '../pages/ArticlesList.vue'
import type { Article } from '../types/article'

const articles = ref<Article[]>([])
const articleToEdit = ref<Article | null>(null)

const searchQuery = ref('')
const sortBy = ref<'date' | 'rating'>('date')

onMounted(() => {
  const stored = localStorage.getItem('articles')
  if (stored) {
    articles.value = JSON.parse(stored)
  }
})

function saveToLocalStorage() {
  localStorage.setItem('articles', JSON.stringify(articles.value))
}

function addArticle(newArticle: Article) {
  newArticle.id = Date.now()
  newArticle.rating = 0
  articles.value.push(newArticle)
  saveToLocalStorage()
}

function editArticle(article: Article) {
  articleToEdit.value = article
}

function deleteArticle(id: number) {
  articles.value = articles.value.filter(article => article.id !== id)
  saveToLocalStorage()
}

function updateRating(updatedArticle: Article) {
  const index = articles.value.findIndex(article => article.id === updatedArticle.id)
  if (index !== -1) {
    articles.value[index].rating = updatedArticle.rating
    saveToLocalStorage()
  }
}

const filteredAndSortedArticles = computed(() => {
  const filtered = articles.value.filter(article =>
    article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.value.toLowerCase())
  )

  if (sortBy.value === 'date') {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (sortBy.value === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  return filtered
})
</script>
