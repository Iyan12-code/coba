<template>
    <section class="relative min-h-screen px-20 mx-auto md:min-h-screen md:mx-auto sm:min-h-screen sm:mx-auto lg:min-h-screen overflow-hidden">
    <div class="absolute inset-0 bg-contain bg-no-repeat bg-right min-h-screen md:min-h-screen sm:min-h-screen"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0"></div>
    </div>

    <Navbar :transparent="true" />

    <div class="relative z-10 container mx-auto h-[calc(100vh-88px)] flex items-center mt-20">
      <div class="max-w-6xl md:max-w-4xl sm:max-w-4xl lg:max-w-4xl md:mt-10">
        <h1 class=" md:text-5xl font-semibold font-poppins text-gray-900 mb-6 leading-tight">
          Empowering the Energy That <br> Moves the World.
        </h1>
        
        <p class="text-2xl text-gray-600 mb-8 font-poppins">
          Delivering trusted oil and gas solutions <br> built on safety, innovation, and <br> long-term sustainability.
        </p>

        <button 
          @click="handleGetStarted"
          class="bg-black text-white font-poppins px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Get started
        </button>

        <div class="mt-16 grid grid-cols-3 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-left">
            <div class="text-4xl font-bold font-poppins text-gray-900 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 font-poppins text-sm">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- section product catalog -->
   <section class="bg-gray-50 py-20 min-h-screen md:min-h-screen sm:min-h-screen px-20">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold font-poppins text-gray-900">
          Our product catalog
        </h2>
        
        <a 
          href="#products" 
          class="flex items-center gap-2 text-lg font-poppins font-medium text-gray-900 hover:text-gray-700 transition-colors group"
        >
          <span class="font-poppins">Explore All</span>
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
          class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          @click="goToProduct(product.id)"
        >
          <!-- Product Image -->     
           <div class="relative overflow-hidden bg-black aspect-[3/3]">
            <img 
              :src="product.image" 
              :alt="product.title"
              class="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>

          <!-- Product Info Card -->
          <div class="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 mx-4 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <div class="flex justify-between">
                  <h3 class="text-2xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {{ product.title }}
                  </h3>
                  <img src="/assets/icon/arrow-right.png" class="bg-white w-10 h-10" alt="">
                </div>

                <p class="text-gray-600 text-xl font-poppins leading-relaxed">
                  {{ product.description }}
                </p>
              </div>
              
              
              <!-- Arrow Icon -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- section about -->

   <section class="bg-black mx-auto min-h-screen md:min-h-screen sm:min-h-screen text-white flex  px-20">
    <!-- Text Section -->
    <div class="space-y-10 mt-30">
      <h2 class="text-5xl font-bold tracking-wide font-poppins ml-20">ABOUT US</h2>
      <p class="text-gray-400 text-xl font-semibold text-justify font-poppins ml-20">
        Founded in 2017, PT Decka Lima Engineering has grown into a reliable partner for Indonesia’s
        energy and industrial sectors. Our focus on  innovation, safety, and excellence drives our
        commitment to every client.
      </p>

        <button class="group ml-20 flex items-center gap-6 bg-white text-black px-8 py-4 rounded-2xl font-medium transition-all  hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95">
          <RouterLink to="/about" class="flex items-center gap-6">         
          <span class="text-3xl font-poppins">Learn more</span>
          <img src="/assets/icon/arrow-up-right.png" 
          alt="arrow" class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"/>
          </RouterLink>
        </button>
    </div>

    <!-- Images Section -->
    <div class="relative flex flex-col items-center py-10 mt-20">
      <!-- Image Back -->
      <img
        src="/assets/about-1.jpg"
        alt="Building modern"
        class="w-3/8 mx-20 object-cover rounded-2xl lg:absolute lg:top-0 lg:right-30 shadow-lg"
      />
      <!-- Image Front -->
      <img
        src="/assets/about-2.jpg"
        alt="Building modern"
        class="w-1/4 object-cover mr-43 relative rounded-2xl lg:mt-54 shadow-lg"
      />
    </div>
  </section>

  <!-- section experience -->
   
   <section class="bg-white py-16 px-6 overflow-hidden min-h-screen md:min-h-screen sm:min-h-screen">
    <div class="max-w-7xl mx-auto text-center">
      <!-- Judul -->
      <h1 class="text-4xl md:text-5xl font-bold mb-14 font-poppins">
        Experience That Powers <br />
        Every Project
      </h1>

      <!-- Tombol kategori -->
      <div
        class="flex justify-center items-center flex-wrap gap-2 rounded-2xl border  py-2 px-3 md:px-3 mb-10 shadow-sm w-fit mx-auto"
      >
        <button
          v-for="(cat, index) in categories"
          :key="index"
          @click="activeCategory = cat.name"
          :class="[
            'px-5 md:px-6 py-3 rounded-xl text-sm md:text-base from-neutral-800 transition-all duration-300 font-poppins',
            activeCategory === cat.name
              ? 'bg-black text-white shadow-md '
              : 'bg-white text-gray-700  hover:bg-gray-100',
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
        <div class="flex justify-center items-center rounded-3xl w-full max-w-8xl  overflow-hidden">
          <div
            v-for="(item, index) in visibleSlides"
            :key="index"
            class="relative flex-shrink-0 w-1/3 transition-all duration-100"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-90 object-cover "
              :class="getRoundedClass(index)"
            />

            <!-- Overlay teks -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-black/70 px-6 py-5 text-left"
            >
              <p class="text-sm text-yellow-400 font-medium mb-1 font-poppins">
                {{ item.category }}
              </p>
              <h2 class="text-xl font-bold text-white mb-1 font-poppins">{{ item.name }}</h2>
              <p class="text-sm text-gray-200 font-poppins">
                📍 {{ item.location }}, {{ item.year }}
              </p>
            </div>
          </div>
        </div>

        <!-- Tombol Kanan -->
        <button
          @click="nextSlide"
          class="absolute right-2 z-20 bg-white/70 hover:bg-white text-gray-700 rounded-full shadow-md p-3 transition font-poppins"
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
       <section class="bg-black min-h-screen md:min-h-screen sm:min-h-screen py-20">
        <div class="items-center max-w-6xl mx-auto ">
        <h1 class="text-center font-poppins text-white font-semibold text-4xl mb-3">Integrated Services <br> for a Stronger Energy Future.</h1>
        <h2 class="text-center font-poppins text-gray-400 text-xl">Expert solutions for oil, gas, industrial, and  government <br> sectors with a focus on quality.</h2>

        <div class="grid grid-cols-3 gap-4 py-20">
            <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/olive-oil.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-poppins font-semibold">Oil & Gas</h1>
              <h2 class="text-gray-400 font-poppins">Expertise in oil and gas sector projects <br> and solutions.</h2>
            </div>

            <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/air-pollution.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-semibold font-poppins">Industrial Works</h1>
              <h2 class="text-gray-400 font-poppins">Delivering quality industrial projects with <br> precision and efficiency.</h2>
            </div>

            <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/government-budget.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-semibold font-poppins">Government Contracts</h1>
              <h2 class="text-gray-400 font-poppins">Specializing in government sector projects <br> and compliance standards.</h2>
            </div>

            <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/shield-check.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-semibold font-poppins">Safety First</h1>
              <h2 class="text-gray-400 font-poppins">Prioritizing safety in all our engineering <br> projects and operations.</h2>
            </div>

           <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/layers.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-semibold font-poppins">Custom Manufacturing</h1>
              <h2 class="text-gray-400 font-poppins">Custom product creation with design and <br> customization options.</h2>
            </div>

            <div class="border bg-[#143E44] rounded-2xl px-5 py-2">
              <div class="flex justify-between items-center mt-5 mb-10">
                <img src="/assets/icon/wrench-alt.png" class="w-10 h-10 " alt="">
                <img src="/assets/icon/arrow-up-right white.png" class="w-5 h-5 mr-2" alt="">
              </div>
              <h1 class="text-white font-semibold font-poppins">Quality Control</h1>
              <h2 class="text-gray-400 font-poppins">Procedures and systems in place to ensure <br> high product quality.</h2>
            </div>
            
        </div>
    </div>
    </section>

    <!-- section dicover -->
     <section class="min-h-screen md:min-h-screen sm:min-h-screen py-10">
        <div class="max-w-6xl mx-auto">
         <div class="items-center mb-10">
             <h1 class="text-center font-bold text-4xl mb-7 font-poppins">Discover our latest news</h1>
             <p class="text-center text-xl mb-3 font-poppins">Discover the achievements that set us apart. From groundbreaking project to industry <br> accolades, we take pride in our aacomplishments.</p>
            </div>
            
            <div class="grid grid-cols-3 gap-3 ">
              <div class="border border-gray-400 rounded-2xl">
                <img src="/assets/discover-1.jpg" class="w-full h-64 z-10 rounded-t-2xl" alt="">
                <div class="mx-4 row-span-3 py-4 mb-2">
                  <div class="flex gap-2 mb-3">
                    <img src="/assets/icon/calendar-minus.png" class="w-6 h-6" alt="">
                    <p class="text-gray-600 font-poppins">Oct 15, 2024</p>
                  </div>
                  <h1 class="font-bold mb-2 font-poppins">Engineering Excellence Award 2024</h1>
                  <h2 class="mb-2 text-gray-600 font-poppins">PT Decka Lima Engineering receives prestigious <br> award for outstanding contribution to industrial engineering.</h2>
                  <button class="font-poppins">Read more</button>
                </div>
              </div>

                <div class="border border-gray-400 rounded-2xl">
                    <img src="/assets/discover-2.jpg" class="w-full h-64 z-10 rounded-t-2xl" alt="">
                    <div class="mx-4 row-span-3 py-4 mb-2">
                  <div class="flex gap-2 mb-3">
                    <img src="/assets/icon/calendar-minus.png" class="w-6 h-6" alt="">
                    <p class="text-gray-600 font-poppins">Sep 28, 2024</p>
                  </div>
                  <h1 class="font-bold mb-2 font-poppins">XYZ Plant Project Completed</h1>
                  <h2 class="mb-2 text-gray-600 text-justify font-poppins">POur team successfully completed the manufacturing plant installation 2 weeks ahead of schedule</h2>
                  <button class="font-poppins">Read more</button>
                  </div>
                </div>

                  <div class="border border-gray-400 rounded-2xl">
                    <img src="/assets/discover-3.jpg" class="w-full h-64 z-10 rounded-t-2xl" alt="">
                    <div class="mx-4 row-span-3 py-4 mb-2">
                      <div class="flex gap-2 mb-3">
                        <img src="/assets/icon/calendar-minus.png" class="w-6 h-6" alt="">
                        <p class="text-gray-600 font-poppins">Aug 10, 2024</p>
                      </div>
                      <h1 class="font-bold mb-2 font-poppins">ISO Certification Renewed</h1>
                      <h2 class="mb-2 text-gray-600 text-justify font-poppins">PT Decka Lima successfully renewed ISO 9001:2015 certification with excellent audit results</h2>
                      <button class="font-poppins">Read more</button>
                      </div>
                  </div>
                </div>

                <div class="mt-10 flex justify-center ">
                  <button class=" bg-black text-white py-4 px-20  rounded-2xl text-2xl font-poppins">
                    <router-link to="/article">
                    Show more
                  </router-link></button>
                </div>

              </div>
     </section>

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref, computed, onMounted, onUnmounted } from "vue";
import router from '../router';

const backgroundImage = ref('/assets/bg-home.png');

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
    image: "/assets/catalog-home1.jpg"
  },
  {
    id: 2,
    title: 'Metal Cylinders',
    description: 'Metal cylinders are hollow or solid tubular components.',
    image: '/assets/catalog-home2.jpg'
  },
  {
    id: 3,
    title: 'Metal Curved',
    description: 'Metal curved edge refers to component that smooth.',
    image: '/assets/catalog-home3.jpg'
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
    image: "/assets/experience-1.jpg",
    category: "Manufacture",
    name: "Crescent",
    location: "Bandung",
    year: "2024",
    type: "Manufacturing",
  },
  {
    image: "/assets/experience-2.jpg",
    category: "Manufacture",
    name: "Ventureplex",
    location: "Jakarta",
    year: "2025",
    type: "Manufacturing",
  },
  {
    image: "/assets/experience-3.jpg",
    category: "Manufacture",
    name: "Horizon",
    location: "Depok",
    year: "2022",
    type: "Manufacturing",
  },
  {
    image: "/assets/PgServices-1.jpg",
    category: "Oil & Gas",
    name: "Energon",
    location: "Surabaya",
    year: "2023",
    type: "Oil & Gas",
  },
  {
    image: "/assets/PgServices-2.jpg",
    category: "Industrial",
    name: "Mechatech",
    location: "Bekasi",
    year: "2022",
    type: "Industrial",
  },
  {
    image: "/assets/PgServices-3.jpg",
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