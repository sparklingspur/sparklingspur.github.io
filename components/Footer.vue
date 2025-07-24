<script setup>
// Import ref, shallowRef, and the definitive fix: markRaw
import { ref, shallowRef, markRaw } from 'vue';
// Import the Phosphor Icon components we'll need
import { PhFacebookLogo, PhInstagramLogo } from '@phosphor-icons/vue';

// --- DATA-DRIVEN LINKS ---

// Social Media Links - Using markRaw on the icon components to permanently prevent reactivity.
const socialLinks = shallowRef([
  {
    name: 'Facebook',
    color: "text-blue-600",
    href: '#', // Replace with your actual Facebook URL
    icon: markRaw(PhFacebookLogo)
  },
  {
    name: 'Instagram',
    color: "text-pink-600",
    href: '#', // Replace with your actual Instagram URL
    icon: markRaw(PhInstagramLogo)
  }
]);

// Footer Navigation Columns - ref is fine here as it contains no components
const footerNav = ref([
  {
    title: 'Main Pages',
    links: [
      { text: 'Home', href: '/' },
      { text: 'Rooms', href: '/rooms' },
      { text: 'Restaurant', href: '/restaurant' },
      { text: 'Auditorium', href: '/hall' }
    ]
  },
  {
    title: 'Explore',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Our Menu', href: '/menu' },
      { text: 'Our Catering', href: '/catering' },
      { text: 'Contact Us', href: '/contact' }
    ]
  }
]);
</script>

<template>
  <footer class="bg-zinc-900 text-stone-300">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Logo and Socials Column -->
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center space-x-4">
            <NuxtImg class="h-20 w-auto" src="/images/caps-solid-logo.png" alt="Hotel CAPS Logo" />
            <div class="text-white font-display">
              <p class="text-2xl font-medium tracking-widest leading-loose">HOTEL</p>
              <p class="text-3xl font-bold tracking-widest -mt-1">CAPS</p>
            </div>
          </div>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" class="text-stone-400 hover:text-white transition-colors duration-300">
              <span class="sr-only">{{ social.name }}</span>
              <component :is="social.icon" :class="social.color" :size="'1em'" class="text-4xl hover:text-white" weight="duotone" />
            </a>
          </div>
        </div>
        
        <!-- Link Columns -->
        <div class="grid grid-cols-2 gap-8 md:col-span-2">
          <div v-for="column in footerNav" :key="column.title">
            <h3 class="text-lg font-display text-white tracking-wider">{{ column.title }}</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li v-for="link in column.links" :key="link.text">
                <NuxtLink :to="link.href" class="text-base text-stone-400 hover:text-white transition-colors duration-300">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-12 border-t border-stone-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p class="text-stone-400 order-1">&copy; 2025 Hotel CAPS. All rights reserved.</p>
        <p class="text-stone-400 order-3 sm:order-2 mt-4 sm:mt-0">
          Created by <a href="https://www.brandsta.in" target="_blank" rel="noopener noreferrer" class="hover:text-white underline">Brandsta</a>
        </p>
        <div class="flex space-x-4 order-2 sm:order-3 mt-4 sm:mt-0">
          <NuxtLink to="/policy" class="text-stone-400 hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="text-stone-400 hover:text-white">Terms & Conditions</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
