<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-30">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
          Our product catalog
        </h2>
        
        <a 
          href="#products" 
          class="flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors group"
        >
          <span>Explore All</span>
          <svg 
            class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      <!-- Product Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <article 
          v-for="product in products" 
          :key="product.id"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          @click="goToProduct(product.id)"
        >
          <!-- Product Image -->
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>

          <!-- Product Info Card -->
          <div class="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {{ product.title }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ product.description }}
                </p>
              </div>
              
              <!-- Arrow Icon -->
              <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg 
                  class="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Product Data
const products = ref([
  {
    id: 1,
    title: 'Metal Flanges',
    description: 'Made from durable metals such as stainless steel.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Metal Cylinders',
    description: 'Metal cylinders are hollow or solid tubular components.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Metal Curved',
    description: 'Metal curved edge refers to component that smooth.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop'
  }
])

// Methods
const goToProduct = (productId) => {
  // Navigasi ke detail produk
  console.log('Go to product:', productId)
  // router.push(`/products/${productId}`)
}
</script>