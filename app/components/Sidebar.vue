<script setup>
import { watch, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const primaryLinks = [
  { name: 'About', url: '#' },
  { name: 'Itineraries', url: '#' },
  { name: 'Stays', url: '#' },
  { name: 'Travel Journal', url: '#' },
  { name: 'Our Difference', url: '#' },
  { name: 'Contact Us', url: '#' }
]

const secondaryLinks = [
  { name: 'Create Your Journey', url: '#' },
  { name: 'Frequently Asked Questions', url: '#' },
  { name: 'Terms and Conditions', url: '#' },
  { name: 'Privacy Policy', url: '#' }
]

onMounted(() => {
  gsap.set('.sidebar-panel', { xPercent: -100 })
  gsap.set('.sidebar-overlay', { autoAlpha: 0 })
})

watch(() => props.isOpen, (newVal) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 0.6 } })
  
  if (newVal) {
    tl.to('.sidebar-overlay', { autoAlpha: 1, duration: 0.4 })
      .to('.sidebar-panel', { xPercent: 0 }, "<0.05")
      .fromTo('.sidebar-link-item', 
        { x: -20, opacity: 0 }, 
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power3.out' }, 
        "-=0.3"
      )
  } else {
    tl.to('.sidebar-panel', { xPercent: -100 })
      .to('.sidebar-overlay', { autoAlpha: 0, duration: 0.4 }, "<0.1")
  }
})
</script>

<template>
  <div class="fixed inset-0 z-[100] pointer-events-none flex">
    <div 
      class="sidebar-overlay absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm pointer-events-auto"
      @click="emit('close')"
    ></div>

    <aside class="sidebar-panel relative w-full md:w-[450px] h-full bg-[#F9F8F6] pointer-events-auto flex flex-col shadow-2xl border-r border-[#EAE6DF] overflow-y-auto">
      
        <div class="flex items-center justify-between p-8 border-b border-[#EAE6DF]/60 flex-shrink-0">
            <span class="font-serif text-2xl tracking-wide text-[#1A1A1A] uppercase">MENU</span>
            <button @click="emit('close')" class="p-2 group relative w-8 h-8 flex items-center justify-center">
                <div class="relative w-5 h-5 flex flex-col justify-center items-center">
                    <span class="w-6 h-[1.5px] bg-[#1A1A1A] absolute rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-0"></span>
                    <span class="w-6 h-[1.5px] bg-[#1A1A1A] absolute -rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-0"></span>
                </div>
            </button>
        </div>

      <div class="flex flex-col px-10 py-10 flex-grow justify-between">
        <nav class="flex flex-col gap-10">
          
          <div class="flex flex-col gap-5">
            <NuxtLink 
              v-for="link in primaryLinks" 
              :key="link.name" 
              :to="link.url"
              @click="emit('close')"
              class="sidebar-link-item font-serif text-2xl text-[#1A1A1A] hover:text-[#C47552] transition-colors duration-300"
            >
              {{ link.name }}
            </NuxtLink>
          </div>

          <hr class="border-[#EAE6DF] my-2 sidebar-link-item" />

          <div class="flex flex-col gap-5">
            <NuxtLink 
              v-for="link in secondaryLinks" 
              :key="link.name" 
              :to="link.url"
              @click="emit('close')"
              class="sidebar-link-item font-serif text-2xl text-[#1A1A1A] hover:text-[#C47552] transition-colors duration-300"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </nav>
        
        <div class="pt-12 sidebar-link-item flex-shrink-0">
          <img src="/images/logo.png" alt="Sree Jith Travel" class="h-8 w-auto opacity-40 grayscale" />
        </div>
      </div>
    </aside>
  </div>
</template>