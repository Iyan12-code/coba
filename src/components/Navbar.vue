<template>
  <header :class="transparent ? 'absolute top-0 left-0 right-0 z-50' : 'bg-white shadow-sm'">
    <nav class="container mx-auto px-30 py-6">
      <div class="flex items-center justify-between">

        <div class="flex-shrink-0">
          <img src="/assets/logo.png" alt="Logo" class="h-10">
        </div>

        <div class="md:hidden">
            <h3 class="text-base font-bold text-gray-900">{{ companyName }}</h3>
        </div>

        <ul class="hidden md:flex justify-center gap-8 flex-1">
          <li><a href="#home" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-2xl">
              Home
            </a>
          </li>
          <li><a href="#catalog" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-2xl">
              Catalog
            </a>
          </li>
          <li><a href="#experience" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-2xl">
              Experience
            </a>
          </li>
          <li><a href="#services" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-2xl">
              Services
            </a>
          </li>
          <li><a href="#article" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-2xl">
              Article
            </a>
          </li>
        </ul>

        <button class="hidden md:block bg-black px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors text-white font-medium text-xl">
          Login
        </button>

        <button @click="toggleMenu" class="md:hidden text-gray-900">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden mt-4 bg-white rounded-lg shadow-lg p-2">
        <ul class="space-y-3">
          <li><a href="#home" class="block text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#catalog" class="block text-gray-700 hover:text-gray-900">Catalog</a></li>
          <li><a href="#experience" class="block text-gray-700 hover:text-gray-900">Experience</a></li>
          <li><a href="#services" class="block text-gray-700 hover:text-gray-900">Services</a></li>
          <li><a href="#article" class="block text-gray-700 hover:text-gray-900">Article</a></li>
        </ul>
        <button class="w-full mt-4 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800">
          Login
        </button>
      </div>

 
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  transparent: {
    type: Boolean,
    default: false
  }
});

const companyName = ref('PT Deck Lima');

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>