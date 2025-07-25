<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

const siteUrl = useRequestURL().origin;

useHead({
  title: 'Privacy Policy | Hotel CAPS',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Learn about how Hotel CAPS collects, uses, and protects your personal data. Our commitment to your privacy.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/policy' },
    { property: 'og:title', content: 'Privacy Policy | Hotel CAPS' },
    { property: 'og:description', content: 'Learn about how Hotel CAPS collects, uses, and protects your personal data. Our commitment to your privacy.' },
    { property: 'og:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/policy' },
    { property: 'twitter:title', content: 'Privacy Policy | Hotel CAPS' },
    { property: 'twitter:description', content: 'Learn about how Hotel CAPS collects, uses, and protects your personal data. Our commitment to your privacy.' },
    { property: 'twitter:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

  ],
  
});

</script>

<template>
  <div>
    <PageHero 
      title="Privacy Policy"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Policy listings will go here...</h2>
    </div>
  </div>
</template>
