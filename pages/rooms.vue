<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-1.jpg',
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/rooms' },
    { property: 'og:title', content: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { property: 'og:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/rooms' },
    { property: 'twitter:title', content: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { property: 'twitter:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

  ],
  
});

</script>

<template>
  <div>
    <PageHero 
      title="Suites & Rooms"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Room listings will go here...</h2>
    </div>
  </div>
</template>
