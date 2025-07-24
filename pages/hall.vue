<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Event & Banquet Hall | Hotel CAPS, Koduvayur, Palakkad',
  meta: [
    { name: 'description', content: 'Host your perfect wedding, conference, or celebration in our state-of-the-art auditorium and banquet hall. Discover the ideal event space in Palakkad at Hotel CAPS.' }
  ]
});
</script>

<template>
  <div>
    <PageHero 
      title="Events Hall"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Hall listings will go here...</h2>
    </div>
  </div>
</template>
