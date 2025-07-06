<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <div v-for="(article, index) in articles" :key="article.id" class="bg-white p-4 rounded-xl shadow mb-4">
      <h2 class="text-xl font-bold">{{ article.title }}</h2>
      <p class="text-gray-700">{{ article.content }}</p>
      <p class="text-sm text-gray-500">Дата: {{ article.date }}</p>
      <p>Рейтинг: {{ article.rating }}</p>

      <button @click="$emit('edit-article', article, index)" class="text-blue-500 hover:underline text-sm mr-2">✏️ Редактировать</button>
      <button @click="$emit('delete-article', article.id)" class="text-red-500 hover:underline text-sm">🗑️ Удалить</button>

      <div class="mt-2">
        <label>Оценка: </label>
        <select v-model.number="article.rating" @change="$emit('rate-article', article)">
          <option :value="0">0</option>
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
          <option :value="5">5</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '../types/article'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articles: Article[]
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['edit-article', 'delete-article', 'rate-article'])
</script>
