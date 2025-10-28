<template>
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

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

<style scoped>
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.03);
}
</style>
