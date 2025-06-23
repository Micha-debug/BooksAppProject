<template>
  <div v-if="articles.length" class="space-y-4">
    <div
      v-for="(article, index) in articles"
      :key="index"
      class="bg-white p-5 rounded-xl shadow-sm border"
    >
      <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
      <p class="text-gray-700 mb-2">{{ article.content }}</p>
      <p class="text-sm text-gray-400">{{ article.date }}</p>
    </div>
  </div>
  <div v-else class="text-center text-gray-400 mt-10">Пока нет ни одной статьи.</div>
</template>

<script setup lang="ts">
defineProps({
  articles: {
    type: Array,
    default: () => []
  }
})
</script>
