<template>
  <div class="home-layout min-h-screen flex flex-col">
    <Navbar :transparent="transparentNavbar" />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { RouterView } from 'vue-router';

defineProps({
  transparentNavbar: {
    type: Boolean,
    default: true
  }
});
</script>
