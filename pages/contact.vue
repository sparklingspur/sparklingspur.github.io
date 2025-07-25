<script setup>
import { ref } from 'vue';
import PageHero from '~/components/PageHero.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-2.jpg'
]);

const siteUrl = useRequestURL().origin;

useHead({
  title: 'Contact Us | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Get in touch with Hotel CAPS. Find our address in Koduvayur, Palakkad, contact number, and email for reservations, event bookings, and inquiries. We look forward to hearing from you.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/contact' },
    { property: 'og:title', content: 'Contact Us | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Get in touch with Hotel CAPS. Find our address in Koduvayur, Palakkad, contact number, and email for reservations, event bookings, and inquiries. We look forward to hearing from you.' },
    { property: 'og:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/contact' },
    { property: 'twitter:title', content: 'Contact Us | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Get in touch with Hotel CAPS. Find our address in Koduvayur, Palakkad, contact number, and email for reservations, event bookings, and inquiries. We look forward to hearing from you.' },
    { property: 'twitter:image', content: `${siteUrl}/images/favicons/android-icon-192x192.png` },

  ],
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
