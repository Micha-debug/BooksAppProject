<template>
  <div>
    <div v-if="articles && articles.length">...</div>
    <div v-else>Пока нет статей</div>
    <h1>Create Article</h1>
    <form @submit.prevent="saveArticle">
      <input v-model="title" placeholder="Title" required />
      <br />
      <textarea v-model="content" placeholder="Content" required></textarea>
      <br />
      <button type="submit">Save</button>
    </form>
    <router-link to="/">Back to list</router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const router = useRouter()

const saveArticle = () => {
  const stored = localStorage.getItem('articles')
  const articles = stored ? JSON.parse(stored) : []

  articles.push({
    id: Date.now(),
    title: title.value,
    content: content.value
  })

  localStorage.setItem('articles', JSON.stringify(articles))
  router.push('/')
}
</script>
