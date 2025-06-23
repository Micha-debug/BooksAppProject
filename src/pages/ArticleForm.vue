<template>
  <form @submit.prevent="submit" class="bg-white shadow-md p-6 rounded-xl mb-8">
    <input
      v-model="title"
      type="text"
      placeholder="Заголовок статьи"
      class="w-full mb-4 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    <textarea
      v-model="content"
      placeholder="Содержание статьи..."
      rows="5"
      class="w-full mb-4 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    <button
      type="submit"
      class="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
    >
      Сохранить статью
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const content = ref('')

const emit = defineEmits(['article-created'])

function submit() {
  emit('article-created', {
    title: title.value,
    content: content.value,
    date: new Date().toLocaleString()
  })
  title.value = ''
  content.value = ''
}
</script>
