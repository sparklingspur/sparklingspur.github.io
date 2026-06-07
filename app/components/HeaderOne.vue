<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './Sidebar.vue'

const isSidebarOpen = ref(false)
const isScrolled = ref(false)
const scrollProgress = ref(0)
const circumference = 2 * Math.PI * 20 

const updateScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  isScrolled.value = scrollTop > 20
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <div>

    <header :class="['fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full px-8 py-3.5 flex items-center justify-between transition-all duration-500',
                isScrolled ? 'bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.12)]' : 'bg-white/80 backdrop-blur-md border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)]']">
    
      <NuxtLink to="/" class="flex-shrink-0 flex items-center">
        <img src="/images/logo.png" alt="Logo" class="h-9 w-auto" />
      </NuxtLink>

      <!-- Sleek, Light Sans-Serif Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink v-for="item in ['About', 'Itineraries', 'Stays', 'Travel Journal', 'Our Difference', 'Contact Us']" 
                  :key="item" to="#" 
                  class="text-[14px] font-sans font-light text-[#1A1A1A] hover:text-[#C47552] transition-colors duration-300 tracking-[0.04em]">
          {{ item }}
        </NuxtLink>
      </nav>

      <!-- Advanced Cubic-Bezier Hamburger -->
      <button @click="isSidebarOpen = true" class="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#F9F8F6] group hover:bg-white transition-colors duration-300 flex-shrink-0">
        <svg class="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="#EAE6DF" stroke-width="2" fill="none" />
            <circle cx="24" cy="24" r="20" stroke="#C47552" stroke-width="3" fill="none" stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - (scrollProgress * circumference)"
                    class="transition-all duration-75 ease-out" />
        </svg>
        
        <!-- Width-Inversion Animation -->
        <div class="flex flex-col gap-[7px] items-end justify-center w-[28px] z-10">
            <span class="w-full h-[2px] bg-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-[50%]"></span>
            <span class="w-[50%] h-[2px] bg-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full"></span>
        </div>
      </button>

    </header>

    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
  </div>
</template>

