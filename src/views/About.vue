<template>
    <section class="relative min-h-screen px-20 py-20 mx-auto md:min-h-screen md:mx-auto sm:min-h-screen sm:mx-auto lg:min-h-screen overflow-hidden">
    <div class="absolute inset-0 bg-contain bg-no-repeat bg-right min-h-screen md:min-h-screen sm:min-h-screen"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0"></div>
    </div>

    <Navbar :transparent="true" />

    <div class="relative min-h-screen container mx-auto h-[calc(100vh-88px)] flex  mt-30">
        <div class="flex gap-10">
            <div class="space-y-5 max-w-2xl text-justify mt-10">
                <h3 class="text-[#FCC046] font-poppins font-semibold text-3xl">How It Started</h3>
                <h1 class="text-4xl font-bold font-poppins">Built from Purpose,<br> Grown with Dedication.</h1>
                <p class="text-xl font-medium font-poppins">PT. Decka Lima began with a vision to deliver dependable oil and gas services that prioritize safety, efficiency, and client trust. What started as a small initiative with a strong commitment to quality has evolved into a trusted partner in the energy sector. Through perseverance, innovation, and passion, 
                    we have consistently grown to meet the increasing demands of the industry.</p>
            </div>

            <div class="relative border-white rounded-3xl max-w-xl min-w-xl mx-auto shadow-[12px_12px_25px_5px_rgba(0,0,0,0.25)]">
                <div class="relative">
                    <img src="/assets/PgAbout-1.jpg" class="w-full rounded-3xl" alt="">
                </div>

                <div class="flex mb-5">
                    <div class="mt-10 mx-10">
                        <h1 class="font-bold font-poppins text-4xl">5.5</h1>
                        <p class="font-semibold font-poppins text-lg">Years Experience</p>
                        <h1 class="font-bold font-poppins text-4xl mt-5">800+</h1>
                        <p class="font-semibold font-poppins text-lg">Projects Done</p>
                    </div>

                    <div class="mt-10 mx-10 ml-40">
                        <h1 class="font-bold font-poppins text-4xl">200+</h1>
                        <p class="font-semibold font-poppins text-lg">Happy Client</p>
                        <h1 class="font-bold font-poppins text-4xl mt-5">40+</h1>
                        <p class="font-semibold font-poppins text-lg">Awards Won</p>
                    </div>
            </div>
          </div>
        </div>
    </div>
    </section>

    <!-- about who we are -->

     <section class="bg-black relative container mx-auto h-[calc(100vh-88px)] flex">
        <div class="flex gap-20 mt-20 px-20">
            <div class="relative rounded-3xl max-w-xl min-w-xl mx-auto">
                <img src="/assets/PgAbout-2.jpg" class="w-full rounded-3xl" alt="">
            </div>
            <div class="space-y-5 max-w-xl text-justify mt-10">
                <h1 class="text-[#FC924E] text-3xl font-semibold font-poppins">Who We Are</h1>
                <h1 class="text-4xl font-semibold font-poppins text-white mb-10">A Trusted Force in <br> Energy Services.</h1>
                <p class="text-gray-500 font-poppins text-xl text-justify">We are a dynamic oil and gas service provider dedicated to delivering solutions that empower industries and support operational excellence. 
                    Backed by experienced professionals, advanced technologies, and a customer-first approach, </p>
            </div>
        </div>
     </section>

     <!-- Driving Energy -->
      <section class="bg-black">
        <div class="py-10 mb-10">
            <h1 class="text-center text-white font-bold font-poppins text-4xl">Driving Energy Forward with </h1>
            <h1 class="text-center text-white font-bold font-poppins text-4xl mt-3">Purpose and Integrity. </h1>
        </div>

        <div class="flex py-20">
            <div class="border bg-[#143E44] relative mx-auto max-w-xl rounded-3xl px-20 py-20">
                <h1 class="text-white mb-10 text-2xl font-semibold font-poppins">Our Vision</h1>
                <h1 class="text-white font-medium font-poppins text-justify">To become a leading and trusted oil and gas service company recognized for innovation,
                     reliability, and sustainable impact in the global energy landscape.</h1>
            </div>

            <div class="border bg-[#143E44] relative mx-20 max-w-xl rounded-3xl px-20 py-20">
                <h1 class="text-white mb-10 text-2xl font-semibold font-poppins">Our Vision</h1>
                <h1 class="text-white text-justify font-medium font-poppins">To become a leading and trusted oil and gas service company recognized for innovation,
                     reliability, and sustainable impact in the global energy landscape.</h1>
            </div>
        </div>
      </section>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { RouterLink } from 'vue-router'
</script>