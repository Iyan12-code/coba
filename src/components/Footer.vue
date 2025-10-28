<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto px-30 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        <!-- Brand & Description -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img 
              src="/assets/logo.png" 
              alt="Decka Lima Logo" 
              class="h-12 w-12"
            >
            <h3 class="text-2xl font-bold">Decka Lima</h3>
          </div>
          
          <p class="text-gray-400 mb-6 leading-relaxed">
            Your Energy Needs Our Expert Solutions. Contact us for more information.
          </p>
          
          <!-- Social Media Icons -->
          <div class="flex gap-4">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Company Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.name">
              <router-link 
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Help Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Help</h4>
          <ul class="space-y-3">
            <li v-for="link in helpLinks" :key="link.name">
              <router-link 
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Contact</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-gray-400">
              <svg class="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="leading-relaxed">
                Jl. Industri Raya No. 123, Jakarta Timur, DKI Jakarta 13920
              </span>
            </li>
            
            <li>
              <a 
                href="tel:+622112345678" 
                class="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+62 21 1234 5678</span>
              </a>
            </li>
            
            <li>
              <a 
                href="mailto:123@deckalima.com" 
                class="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>123@deckalima.com</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <div class="flex items-center gap-2 text-gray-400 text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
            </svg>
            <span>2025 PT. Decka Lima Engineering. All rights reserved.</span>
          </div>
          
          <!-- Legal Links -->
          <div class="flex gap-6">
            <router-link 
              to="/terms" 
              class="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms & Conditions
            </router-link>
            <router-link 
              to="/privacy" 
              class="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Company Navigation Links
const companyLinks = ref([
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
  { name: 'News', path: '/news' }
])

// Help Navigation Links
const helpLinks = ref([
  { name: 'Customer Support', path: '/support' },
  { name: 'Track Order', path: '/track-order' },
  { name: 'Returns', path: '/returns' },
  { name: 'FAQ', path: '/faq' }
])

// Social Media Links with SVG Icons
const socialMedia = ref([
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      `
    }
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      `
    }
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      `
    }
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      `
    }
  }
])
</script>

<style scoped>
/* Optional: Custom styles if needed */
</style>