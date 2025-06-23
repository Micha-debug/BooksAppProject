<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Платформа статей ✍️</h1>
    <ArticleForm @article-created="addArticle" />
    <ArticlesList :articles="articles" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleForm from '@/pages/ArticleForm.vue'
import ArticlesList from '@/pages/ArticlesList.vue'

const articles = ref([])

onMounted(() => {
  const saved = localStorage.getItem('articles')
  if (saved) articles.value = JSON.parse(saved)
})

function addArticle(article) {
  articles.value.unshift(article)
  localStorage.setItem('articles', JSON.stringify(articles.value))
}
</script>
