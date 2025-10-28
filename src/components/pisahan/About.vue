<template>
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
</template>

<script setup>
//
</script>

<style scoped>
/* Optional: subtle transition or glow */
img {
  transition: transform 0.4s ease;
}
img:hover {
  transform: scale(1.03);
}
</style>
