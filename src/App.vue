<template>
  <div id="app">
    <!-- HomeLayout otomatis render Navbar + Footer -->
    <HomeLayout>
      <Home />
    </HomeLayout>
  </div>
</template>

<script setup>
import HomeLayout from './layouts/HomeLayout.vue';
import Home from './components/Home.vue';
</script>