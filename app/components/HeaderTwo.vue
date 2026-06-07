<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './Sidebar.vue'

const isSidebarOpen = ref(false)
const scrollProgress = ref(0)
const isScrolled = ref(false)

const updateScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
  isScrolled.value = scrollTop > 40
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

    <header :class="['fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b border-transparent', 
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] py-5' : 'bg-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] py-6']">
      
      <div class="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <NuxtLink to="/" class="flex-shrink-0 transition-transform duration-300">
          <img src="/images/logo.png" alt="Logo" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Sleek, Light Sans-Serif Navigation -->
        <nav class="hidden lg:flex items-center gap-10">
          <NuxtLink v-for="item in ['About', 'Itineraries', 'Stays', 'Travel Journal', 'Our Difference', 'Contact Us']" 
                    :key="item" to="#" 
                    class="text-[14px] font-sans font-light text-[#1A1A1A] hover:text-[#C47552] transition-colors duration-300 tracking-[0.04em] relative group">
            {{ item }}
            <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C47552] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Advanced Cubic-Bezier Hamburger -->
        <button @click="isSidebarOpen = true" class="flex flex-col gap-[8px] items-end group p-3 relative z-10 w-[50px]">
            <span class="w-full h-[2px] bg-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-[50%]"></span>
            <span class="w-[50%] h-[2px] bg-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full"></span>
        </button>

      </div>

      <div class="absolute bottom-0 left-0 h-[3px] bg-[#C47552] transition-all duration-75 ease-out" 
           :style="{ width: scrollProgress + '%' }">
      </div>
    </header>

    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
  </div>
</template>