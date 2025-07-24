<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Terms & Conditions | Hotel CAPS, Koduvayur, Palakkad',
  meta: [
    { name: 'description', content: 'Read the terms and conditions for bookings, stays, and use of services at Hotel CAPS, Palakkad.' }
  ]
});

</script>

<template>
  <div>
    <PageHero 
      title="Terms and Conditions"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Terms listings will go here...</h2>
    </div>
  </div>
</template>
