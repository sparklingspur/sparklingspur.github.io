<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '~/components/PageHero.vue';
import { roomsData, extraCharges } from '~/roomsData.js';
import RoomDetails from '~/components/RoomDetails.vue';
import RoomGalleryPreview from '~/components/RoomGalleryPreview.vue';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

const main = ref(null);

// --- ANIMATION LOGIC ---
onMounted(() => {

  window.scrollTo(0, 0); // Scrolls to the top (x: 0, y: 0)

  // Use a GSAP context for safe animation management and cleanup
  let ctx = gsap.context(() => {
    const roomCards = gsap.utils.toArray('.room-card');
    
    roomCards.forEach((card, index) => {
      const details = card.querySelector('.room-details-col');
      const gallery = card.querySelector('.room-gallery-col');

      const isReversed = index % 2 !== 0;

      // Animate the two columns in from opposite sides
      gsap.from(details, {
        x: isReversed ? 50 : -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        }
      });
      gsap.from(gallery, {
        x: isReversed ? -50 : 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        }
      });
    });
  }, main.value); // Scope the context to the main container

  onUnmounted(() => {
    ctx.revert(); // Cleanup GSAP animations
  });
});

useHead({
  title: 'Suites & Rooms Pricing | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'View the detailed pricing and tariffs for our Standard, Deluxe, and Suite rooms at Hotel CAPS. Plan your perfect stay in Palakkad with transparent and competitive rates.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/pricing' },
    { property: 'og:title', content: 'Suites & Rooms Pricing | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'View the detailed pricing and tariffs for our Standard, Deluxe, and Suite rooms at Hotel CAPS. Plan your perfect stay in Palakkad with transparent and competitive rates.' },
    { property: 'og:image', content: 'https://sparklingspur.github.io//images/favicons/caps-og-image.jpg' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/pricing' },
    { property: 'twitter:title', content: 'Suites & Rooms Pricing | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'View the detailed pricing and tariffs for our Standard, Deluxe, and Suite rooms at Hotel CAPS. Plan your perfect stay in Palakkad with transparent and competitive rates.' },
    { property: 'twitter:image', content: 'https://sparklingspur.github.io//images/favicons/caps-og-image.jpg' },

  ],
  
});

</script>

<template>
  <div ref="main">
    <PageHero 
      title="Rooms Pricing"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <div class="bg-white py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Loop through each room and create a card -->
        <div 
          v-for="(room, index) in roomsData" 
          :key="room.id"
          class="room-card grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl p-4 sm:p-6 border-4 border-amber-400 items-center"
        >
          <!-- The layout alternates for each room using the 'order' class, now starting at the LG breakpoint -->
          <div class="room-details-col" :class="{ 'lg:order-2': index % 2 !== 0 }">
            <RoomDetails :room="room" :extraCharges="extraCharges" />
          </div>
          <div class="room-gallery-col" :class="{ 'lg:order-1': index % 2 !== 0 }">
            <RoomGalleryPreview :gallery-images="room.galleryImages" />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
