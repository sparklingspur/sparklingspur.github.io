<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Contact Us | Hotel CAPS, Koduvayur, Palakkad',
  meta: [
    { name: 'description', content: 'Get in touch with Hotel CAPS. Find our address in Koduvayur, Palakkad, contact number, and email for reservations, event bookings, and inquiries. We look forward to hearing from you.' }
  ]
});
</script>

<template>
  <div>
    <PageHero 
      title="Contact Us"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Contact listings will go here...</h2>
    </div>
  </div>
</template>
