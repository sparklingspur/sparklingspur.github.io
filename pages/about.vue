<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';



// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

const siteUrl = useRequestURL().origin;

useHead({
  title: 'About Us | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Learn about the vision and story behind Hotel CAPS. Discover our commitment to blending modern luxury with the timeless tradition of Kerala hospitality in Koduvayur, Palakkad.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/about' },
    { property: 'og:title', content: 'About Us | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Learn about the vision and story behind Hotel CAPS. Discover our commitment to blending modern luxury with the timeless tradition of Kerala hospitality in Koduvayur, Palakkad.' },
    { property: 'og:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/about' },
    { property: 'twitter:title', content: 'About Us | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Learn about the vision and story behind Hotel CAPS. Discover our commitment to blending modern luxury with the timeless tradition of Kerala hospitality in Koduvayur, Palakkad.' },
    { property: 'twitter:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

  ],

});
</script>

<template>
  <div>
    <PageHero 
      title="About Us"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">About listings will go here...</h2>
    </div>
  </div>
</template>
