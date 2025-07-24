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
    { name: 'description', content: 'Bring the taste of Hotel CAPS to your event with our professional outdoor catering services in the Palakkad region. Perfect for weddings, corporate events, and parties.' }
  ]
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
