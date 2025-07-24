<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

useHead({
  title: 'Privacy Policy | Hotel CAPS',
  meta: [
    { name: 'description', content: 'Learn about how Hotel CAPS collects, uses, and protects your personal data. Our commitment to your privacy.' }
  ]
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
