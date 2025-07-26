<script setup>
import { ref, shallowRef, markRaw } from 'vue';
import PageHero from '~/components/PageHero.vue';
import FeaturesGrid from '~/components/FeaturesGrid.vue';

// We explicitly import the icon components we need on this page.
import IconWifi from '~/components/icons/IconWifi.vue';
import IconBed from '~/components/icons/IconBed.vue';
import IconAirConditioner from '~/components/icons/IconAirConditioner.vue';
import IconForkKnife from '~/components/icons/IconForkKnife.vue';
import IconElevator from '~/components/icons/IconElevator.vue';
import IconClockClockwise from '~/components/icons/IconClockClockwise.vue';
import IconBarbell from '~/components/icons/IconBarbell.vue';
import IconStorage from '~/components/icons/IconStorage.vue';
import IconWorkdesk from '~/components/icons/IconWorkDesk.vue';

// Define the data for our hero section
const heroImages = ref([
  '/images/rooms/hero/room-hero-1.jpg',
  '/images/rooms/hero/room-hero-2.jpg'
]);

// This is the data for our new FeaturesGrid component.
// It's clean, easy to read, and simple to update.
const roomFeatures = shallowRef([
  {
    icon: markRaw(IconWifi),
    title: 'Free Wi-Fi',
    description: 'Stay connected anytime, anywhere.'
  },
  {
    icon: markRaw(IconWorkdesk),
    title: 'Work Desk',
    description: 'Striving to exceed expectations in every stay.'
  },
  {
    icon: markRaw(IconBed),
    title: 'Cozy Bedding',
    description: 'Thoughtfully designed spaces for a relaxing stay.'
  },
  {
    icon: markRaw(IconStorage),
    title: 'Storage Space',
    description: 'Striving to exceed expectations in every stay.'
  },
  {
    icon: markRaw(IconAirConditioner),
    title: 'Air Conditioning',
    description: 'A peaceful escape surrounded by nature.'
  },
  {
    icon: markRaw(IconForkKnife),
    title: 'Free Breakfast',
    description: 'Enjoy meals and assistance at any hour.'
  },
  {
    icon: markRaw(IconElevator),
    title: 'Elevator Facility',
    description: 'Elevating your experience, one floor at a time.'
  },
  {
    icon: markRaw(IconClockClockwise),
    title: '24/7 Room Service',
    description: 'Start your day with a delicious meal.'
  },
  {
    icon: markRaw(IconBarbell),
    title: 'CCTV Cameras',
    description: 'Genuine experiences rooted in local culture.'
  },
  {
    icon: markRaw(IconBarbell),
    title: 'Car Parking',
    description: 'Genuine experiences rooted in local culture.'
  },
]);

useHead({
  title: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad',

  meta: [
    // SEO and Page Information
    { name: 'description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
    { name: 'author', content: 'kriz - https://www.brandsta.in' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://capsfamily.in/rooms' },
    { property: 'og:title', content: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'og:description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { property: 'og:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://capsfamily.in/rooms' },
    { property: 'twitter:title', content: 'Suites & Rooms | Hotel CAPS, Koduvayur, Palakkad' },
    { property: 'twitter:description', content: 'Explore our collection of elegant suites and rooms at Hotel CAPS. Discover your personal sanctuary of comfort and modern luxury for an unforgettable stay in Palakkad.' },
    { property: 'twitter:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

  ],
  
});

</script>

<template>
  <div>
    <PageHero 
      title="Suites & Rooms"
      subtitle="Discover your personal sanctuary of comfort, elegance, and modern luxury."
      :images="heroImages"
    />

    <FeaturesGrid 
      title="Everything You Need"
      :features="roomFeatures"
    />

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Room listings will go here...</h2>
    </div>
  </div>
</template>
