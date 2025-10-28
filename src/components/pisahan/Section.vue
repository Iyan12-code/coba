<template>
  <section class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 w-full mx-auto bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
    </div>

    <Navbar :transparent="true" />

    <div class="relative z-10 container mx-auto px-30 h-[calc(100vh-88px)] flex items-center mt-20">
      <div class="max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
          Empowering the Energy That Moves the World.
        </h1>
        
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Delivering trusted oil and gas solutions <br> built on safety, innovation, and <br> long-term sustainability.
        </p>

        <button 
          @click="handleGetStarted"
          class="bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Get started
        </button>

        <div class="mt-16 grid grid-cols-3 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-left">
            <div class="text-4xl font-bold text-gray-900 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 text-sm">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <SectionCatalog/>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../Navbar.vue';
import SectionCatalog from './SectionCatalog.vue';

const backgroundImage = ref('/assets/Home.png');

const stats = ref([
  { value: '800+', label: 'Projects Done' },
  { value: '200+', label: 'Happy Client' },
  { value: '40+', label: 'Awards Won' }
]);

const handleGetStarted = () => {
  console.log('Get started clicked');
};
</script>