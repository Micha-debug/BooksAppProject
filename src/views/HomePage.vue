<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Платформа статей ✍️</h1>
    <ArticleForm @article-created="addArticle" :articleToEdit="articleToEdit" />
    <ArticlesList :articles="articles" @edit-article="editArticle" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleForm from '../pages/ArticleForm.vue'
import ArticlesList from '../pages/ArticlesList.vue'

interface Article {
  title: string
  content: string
  date: string
}

const articles = ref<Article[]>([])
const articleToEdit = ref<Article | null>(null)
const editingIndex = ref<number | null>(null)

onMounted(() => {
  const saved = localStorage.getItem('articles')
  if (saved) articles.value = JSON.parse(saved)
})
function editArticle(article: Article, index: number) {
  articleToEdit.value = { ...article }
  editingIndex.value = index
}

function addArticle(article: Article) {
  if (editingIndex.value !== null) {
    articles.value[editingIndex.value] = article
    editingIndex.value = null
  } else {
    articles.value.unshift(article)
  }
  localStorage.setItem('articles', JSON.stringify(articles.value))
  articleToEdit.value = null
}

</script>
