<template>
  <div class="home-layout min-h-screen flex flex-col">
    <!-- Navbar Component -->
    <Navbar :transparent="transparentNavbar" />
    
    <!-- Main Content Area - Slot untuk HeroSection atau komponen lain -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

// Props untuk kustomisasi navbar
defineProps({
  transparentNavbar: {
    type: Boolean,
    default: true // Default transparent untuk homepage
  }
})
</script>