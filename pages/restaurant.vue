<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Multi-Cuisine Restaurant | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Embark on a culinary journey at the Hotel CAPS multi-cuisine restaurant. Enjoy a symphony of flavors, from authentic Keralan delicacies to global favorites in Palakkad.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/restaurant' },
    { property: 'og:title', content: 'Multi-Cuisine Restaurant | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Embark on a culinary journey at the Hotel CAPS multi-cuisine restaurant. Enjoy a symphony of flavors, from authentic Keralan delicacies to global favorites in Palakkad.' },
    { property: 'og:image', content: 'https://sparklingspur.github.io//images/favicons/caps-og-image.jpg' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/restaurant' },
    { property: 'twitter:title', content: 'Multi-Cuisine Restaurant | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Embark on a culinary journey at the Hotel CAPS multi-cuisine restaurant. Enjoy a symphony of flavors, from authentic Keralan delicacies to global favorites in Palakkad.' },
    { property: 'twitter:image', content: 'https://sparklingspur.github.io//images/favicons/caps-og-image.jpg' },

  ],
  
});

</script>

<template>
  <div>
    <PageHero 
      title="Our Restaurant"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Restaurant listings will go here...</h2>
    </div>
  </div>
</template>
