<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Outdoor Catering Services | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Bring the taste of Hotel CAPS to your event with our professional outdoor catering services in the Palakkad region. Perfect for weddings, corporate events, and parties.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/catering' },
    { property: 'og:title', content: 'Outdoor Catering Services | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Bring the taste of Hotel CAPS to your event with our professional outdoor catering services in the Palakkad region. Perfect for weddings, corporate events, and parties.' },
    { property: 'og:image', content: '/images/favicons/android-icon-192x192.png' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/catering' },
    { property: 'twitter:title', content: 'Outdoor Catering Services | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Bring the taste of Hotel CAPS to your event with our professional outdoor catering services in the Palakkad region. Perfect for weddings, corporate events, and parties.' },
    { property: 'twitter:image', content: '/images/favicons/android-icon-192x192.png' },

  ],
});
</script>

<template>
  <div>
    <PageHero 
      title="Our Catering"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Catering listings will go here...</h2>
    </div>
  </div>
</template>
