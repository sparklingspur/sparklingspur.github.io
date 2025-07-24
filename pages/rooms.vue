<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-1.jpg',
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Luxury Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad',
  meta: [
    { name: 'description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' }
  ]
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
