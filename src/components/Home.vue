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

  <!-- section product catalog -->
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

  <!-- section about -->

   <section class="bg-black text-white py-16 px-30 flex flex-col lg:flex-row items-center justify-between gap-12">
    <!-- Text Section -->
    <div class="max-w-lg space-y-6">
      <h2 class="text-4xl font-extrabold tracking-wide">ABOUT US</h2>
      <p class="text-gray-300 ">
        Founded in 2017, PT Decka Lima Engineering has grown into a reliable partner for Indonesia’s
        energy and industrial sectors. Our focus on  innovation, safety, and excellence drives our
        commitment to every client.
      </p>

      <button
        class="bg-white text-black font-medium py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition"
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Images Section -->
    <div class="relative flex flex-col items-center lg:items-end">
      <!-- Image Back -->
      <img
        src="/assets/Home.png"
        alt="Building modern"
        class="w-90 h-90 object-cover rounded-2xl lg:absolute lg:top-0 lg:right-0 shadow-lg"
      />
      <!-- Image Front -->
      <img
        src="/assets/Home.png"
        alt="Building modern"
        class="w-80 h-80 object-cover relative rounded-2xl lg:mt-60 lg:mr-62 shadow-lg"
      />
    </div>
  </section>

  <!-- section experience -->
   
   <section class="bg-white py-16 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto text-center">
      <!-- Judul -->
      <h1 class="text-4xl md:text-5xl font-bold mb-8">
        Experience That Powers <br />
        Every Project
      </h1>

      <!-- Tombol kategori -->
      <div
        class="flex justify-center items-center flex-wrap gap-2 bg-gray-50 rounded-full border border-gray-200 py-2 px-3 md:px-6 mb-10 shadow-sm w-fit mx-auto"
      >
        <button
          v-for="(cat, index) in categories"
          :key="index"
          @click="activeCategory = cat.name"
          :class="[
            'px-5 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300',
            activeCategory === cat.name
              ? 'bg-black text-white shadow-md scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Carousel -->
      <div class="relative flex items-center justify-center w-full select-none">
        <!-- Tombol Kiri -->
        <button
          @click="prevSlide"
          class="absolute left-2 z-20 bg-white/70 hover:bg-white text-gray-700 rounded-full shadow-md p-3 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Gambar Carousel -->
        <div class="flex justify-center items-center w-full max-w-6xl overflow-hidden">
          <div
            v-for="(item, index) in visibleSlides"
            :key="index"
            class="relative flex-shrink-0 w-1/3 transition-all duration-700"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-80 object-cover"
              :class="getRoundedClass(index)"
            />

            <!-- Overlay teks -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-black/70 px-6 py-5 text-left"
            >
              <p class="text-sm text-yellow-400 font-medium mb-1">
                {{ item.category }}
              </p>
              <h2 class="text-xl font-bold text-white mb-1">{{ item.name }}</h2>
              <p class="text-sm text-gray-200">
                📍 {{ item.location }}, {{ item.year }}
              </p>
            </div>
          </div>
        </div>

        <!-- Tombol Kanan -->
        <button
          @click="nextSlide"
          class="absolute right-2 z-20 bg-white/70 hover:bg-white text-gray-700 rounded-full shadow-md p-3 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- section integrated -->
       <section class="bg-black">
        <div class="items-center max-w-7xl mx-auto ">
        <h1 class="text-center text-white font-semibold text-2xl mb-3">Integrated Services <br> for a Stronger Energy Future.</h1>
        <h2 class="text-center text-gray-400">Expert solutions for oil, gas, industrial, and  government <br> sectors with a focus on quality.</h2>

        <div class="grid grid-cols-3 gap-4 py-10">
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Oil & Gas</h1>
                <h2 class="text-gray-400">Expertise in oil and gas sector projects and solutions.</h2>
            </div>
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Industrial Works</h1>
                <h2 class="text-gray-400">Delivering quality industrial projects with precision and efficiency.</h2>
            </div>
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Government Contracts</h1>
                <h2 class="text-gray-400">Specializing in government sector projects and compliance standards.</h2>
            </div>
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Safety First</h1>
                <h2 class="text-gray-400">Prioritizing safety in all our engineering projects and operations.</h2>
            </div>
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Custom Manufacturing</h1>
                <h2 class="text-gray-400">Custom product creation with design and customization options.</h2>
            </div>
            <div class="border bg-[#143E44] rounded-2xl px-5">
                <h1 class="text-white">Quality Control</h1>
                <h2 class="text-gray-400">Procedures and systems in place to ensure high product quality.</h2>
            </div>
        </div>
    </div>
    </section>

    <!-- section dicover -->
     <section>
        <div class="max-w-7xl mx-auto">
         <div class="items-center">
             <h1 class="text-center">Discover our latest news</h1>
             <p class="text-center">Discover the achievements that set us apart. From groundbreaking project to industry <br> accolades, we take pride in our aacomplishments.</p>
            </div>
            
        <div class="flex justify-center  gap-5">
                <div class="border border-gray-400 rounded-2xl">
                    <img src="/assets/Home.png" class="w-full h-64 z-10 rounded-2xl" alt="">
                    <h1>asdwawdas</h1>
                </div>

                <div class="border border-gray-400 rounded-2xl">
                    <img src="/assets/Home.png" class="w-full h-64 z-10 rounded-2xl" alt="">
                    <h1>asdwawdas</h1>
                </div>

                <div class="border border-gray-400 rounded-2xl">
                    <img src="/assets/Home.png" class="w-full h-64 z-10 rounded-2xl" alt="">
                    <h1>asdwawdas</h1>
                </div>
        </div>
        <button class="mt-10 flex justify-center">Show more</button>
        </div>
     </section>

</template>

<script setup>
import Navbar from './Navbar.vue';
import SectionCatalog from './pisahan/SectionCatalog.vue';
import { ref, computed, onMounted, onUnmounted } from "vue";

const backgroundImage = ref('/assets/Home.png');

const stats = ref([
  { value: '800+', label: 'Projects Done' },
  { value: '200+', label: 'Happy Client' },
  { value: '40+', label: 'Awards Won' }
]);

const handleGetStarted = () => {
  console.log('Get started clicked');
};

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

const activeCategory = ref("Manufacturing");
const currentIndex = ref(0);

const categories = [
  { name: "Manufacturing", label: "Manufacturing" },
  { name: "Oil & Gas", label: "Oil & Gas" },
  { name: "Industrial", label: "Industrial Works" },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    category: "Manufacture",
    name: "Crescent",
    location: "Bandung",
    year: "2024",
    type: "Manufacturing",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    category: "Manufacture",
    name: "Ventureplex",
    location: "Jakarta",
    year: "2025",
    type: "Manufacturing",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Manufacture",
    name: "Horizon",
    location: "Depok",
    year: "2022",
    type: "Manufacturing",
  },
  {
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b6d0a3b",
    category: "Oil & Gas",
    name: "Energon",
    location: "Surabaya",
    year: "2023",
    type: "Oil & Gas",
  },
  {
    image: "https://images.unsplash.com/photo-1554324319-6e6f3ff0b2e3",
    category: "Industrial",
    name: "Mechatech",
    location: "Bekasi",
    year: "2022",
    type: "Industrial",
  },
  {
    image: "https://images.unsplash.com/photo-1581092334444-0c89b8f7eaa0",
    category: "Industrial",
    name: "Infratek",
    location: "Tangerang",
    year: "2024",
    type: "Industrial",
  },
];

const filteredProjects = computed(() =>
  projects.filter((p) => p.type === activeCategory.value)
);

const visibleSlides = computed(() => {
  const total = filteredProjects.value.length;
  const slides = [];
  for (let i = 0; i < 3; i++) {
    slides.push(filteredProjects.value[(currentIndex.value + i) % total]);
  }
  return slides;
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredProjects.value.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + filteredProjects.value.length) %
    filteredProjects.value.length;
};

// Auto slide setiap 4 detik
let interval;
onMounted(() => {
  interval = setInterval(nextSlide, 4000);
});
onUnmounted(() => clearInterval(interval));

// Rounded untuk tiap posisi gambar
const getRoundedClass = (index) => {
  if (index === 0) return "rounded-l-2xl";
  if (index === 2) return "rounded-r-2xl";
  return "rounded-none";
};

</script>