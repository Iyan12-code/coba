<template>
  <footer class="bg-black text-white md:min-h-screen sm:min-h-screen">
    <div class="container mx-auto px-30 py-20 items-center">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 mb-12">
        
        <!-- Brand & Description -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-5 mb-5">
            <img 
              src="/assets/logo.png" 
              alt="Decka Lima Logo" 
              class="h-15 w-15"
            >
            <h3 class="text-2xl font-semibold font-poppins">Decka Lima</h3>
          </div>
          
          <p class="text-gray-400 mb-6 leading-relaxed text-lg font-medium font-poppins">
            Your Energy Needs Our Expert Solutions. Contact us for <br> more information.
          </p>
          
          <!-- Social Media Icons -->
          <div class="flex gap-4">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              href="#"
              :aria-label="social.name"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <img 
                :src="social.icon" 
                :alt="social.name"
                class="w-5 h-5"
              />
            </a>
          </div>
        </div>
        
        <!-- Company Links -->
        <div class="mx-20">
          <h4 class="text-2xl font-semibold mb-10 mt-4 font-poppins">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.name">
              <a 
                href="#"
                class="text-gray-400 font-poppins hover:text-white transition-colors font-medium"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Help Links -->
        <div>
          <h4 class="text-2xl font-semibold mb-10 mt-4 font-poppins">Costumer Care</h4>
          <ul class="space-y-3">
            <li v-for="link in helpLinks" :key="link.name">
              <a 
                href="#"
                class="text-gray-400 font-poppins hover:text-white transition-colors font-medium"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-2xl font-semibold mb-10 mt-4 font-poppins">Contact</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-gray-400">
              <svg class="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="leading-relaxed text-xl font-medium font-poppins">
                Jl. Industri Raya No. 123, Jakarta Timur, DKI Jakarta 13920
              </span>
            </li>
            
            <li>
              <a 
                href="#"
                class="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-poppins"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="font-medium font-poppins">+62 21 1234 5678</span>
              </a>
            </li>
            
            <li>
              <a 
                href="#"
                class="flex items-center gap-3 font-poppins text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="font-medium font-poppins">123@deckalima.com</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <!-- Divider -->
      <div class="border-t-2 border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <div class="flex items-center gap-2 text-gray-400 text-sm opacity-50 font-poppins">
            <img src="/assets/icon/copyright 1.png" class="w-5 h-5" alt="">
            <span class="text-sm font-poppins ">
              2025 PT. Decka Lima Engineering. All rights reserved.
            </span>
          </div>
          
          <!-- Legal Links -->
          <div class="flex gap-6">
            <a 
              href="#"
              class="text-gray-400 hover:text-white transition-colors text-sm opacity-50 font-poppins"
            >
              Terms & Conditions
            </a>
            <a 
              href="#"
              class="text-gray-400 hover:text-white transition-colors text-sm opacity-50 font-poppins"
            >
              Privacy Policy
            </a>
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
  { name: 'About Us' },
  { name: 'Services' },
  { name: 'Experience' },
  { name: 'News' }
])

// Help Navigation Links
const helpLinks = ref([
  { name: 'Contact' }
])

// Social Media Links
const socialMedia = ref([
  {
    name: 'Facebook',
    icon: '/assets/sosmed/facebook.png'
  },
  {
    name: 'Instagram',
    icon: '/assets/sosmed/instagram 3.png'
  },
  {
    name: 'Twitter',
    icon: '/assets/sosmed/twitter 3.png'
  },
  {
    name: 'TikTok',
    icon: '/assets/sosmed/tik-tok.png'
  }
])
</script>
