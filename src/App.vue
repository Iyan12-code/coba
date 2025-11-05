<template>
  <HomeLayout>
    <RouterView />
  </HomeLayout>
</template>

<script setup>
import HomeLayout from './layouts/HomeLayout.vue';
import { RouterView } from 'vue-router';
</script>
