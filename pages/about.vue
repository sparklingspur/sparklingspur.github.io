<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Our Story | Hotel CAPS, Koduvayur, Palakkad',
  meta: [
    { name: 'description', content: 'Learn about the vision and story behind Hotel CAPS. Discover our commitment to blending modern luxury with the timeless tradition of Kerala hospitality in Koduvayur, Palakkad.' }
  ]
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
