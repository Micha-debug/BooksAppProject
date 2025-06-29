<template>
  <div v-if="articles.length" class="space-y-4">
    <div
      v-for="(article, index) in articles"
      :key="index"
      class="bg-white p-5 rounded-xl shadow-sm border"
    >
    <div class="text-gray-700 mb-2 whitespace-pre-wrap">
      <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
      <p class="text-gray-700 mb-2">{{ article.content }}</p>
      <p class="text-sm text-gray-400 mb-2">{{ article.date }}</p>
    </div>
      <button
        @click="$emit('edit-article', article, index)"
        class="text-blue-500 hover:underline text-sm"
      >
        ✏️ Редактировать
      </button>
    </div>
  </div>
  <div v-else class="text-center text-gray-400 mt-10">Пока нет ни одной статьи.</div>
</template>

<script setup lang="ts">
interface Article {
  title: string
  content: string
  date: string
}

defineProps<{ articles: Article[] }>()
defineEmits(['edit-article'])
</script>
