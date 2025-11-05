<template>
  <section class="min-h-screen bg-gray-50 text-black px-20 py-10">
    <h1 class="text-5xl font-bold mb-6">Our Articles</h1>
    <p class="text-lg text-gray-600 mb-8">
      Welcome to our article page! Here you can find insights and updates about our projects.
    </p>

    <RouterLink
      to="/"
      class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      ← Back to Home
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
