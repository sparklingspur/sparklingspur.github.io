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
import IconStorage from '~/components/icons/IconStorage.vue';
import IconWorkdesk from '~/components/icons/IconWorkDesk.vue';
import IconCctv from '~/components/icons/IconCctv.vue';
import IconParking from '~/components/icons/IconParking.vue';

// Define the data for our hero section
const heroImages = ref([
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
    title: '24/7 Check In/Out',
    description: 'Start your day with a delicious meal.'
  },
  {
    icon: markRaw(IconCctv),
    title: 'CCTV Cameras',
    description: 'Genuine experiences rooted in local culture.'
  },
  {
    icon: markRaw(IconParking),
    title: 'Car Parking',
    description: 'Genuine experiences rooted in local culture.'
  },
]);


const tourismSpots = ref([
  {
    image: '/images/home/tourism/1.jpg',
    title: 'Malampuzha Dam',
    distance: '9.8',
    map: 'https://maps.app.goo.gl/1zFvX8CMGHNzKnkg7'
  },
  {
    image: '/images/home/tourism/2.jpg',
    title: 'Silent Valley National Park',
    distance: '67.4',
    map: 'https://maps.app.goo.gl/QPg7FZ1gtvhAxP8E6'
  },
  {
    image: '/images/home/tourism/3.jpg',
    title: 'Palakkad Fort',
    distance: '10.5',
    map: 'https://maps.app.goo.gl/YvLrZVPy2x9Tmh1L8'
  },
  {
    image: '/images/home/tourism/4.jpg',
    title: 'Dhoni Hills',
    distance: '16.2',
    map: 'https://maps.app.goo.gl/B7nHQZ1NDXkJJYpw8'
  },
  {
    image: '/images/home/tourism/5.jpg',
    title: 'Kalpathy Heritage Village',
    distance: '8.1',
    map: 'https://maps.app.goo.gl/cDdE43PXnT4K25xUA'
  },
  {
    image: '/images/home/tourism/6.jpg',
    title: 'Seethargundu Viewpoint',
    distance: '35.9',
    map: 'https://maps.app.goo.gl/5eVMsXc2s6nZmwRr6'
  },
  {
    image: '/images/home/tourism/7.jpg',
    title: 'Fantasy Park',
    distance: '10.1',
    map: 'https://maps.app.goo.gl/8X1EsRQ42ZpXBoTR9'
  },
  {
    image: '/images/home/tourism/8.jpg',
    title: 'Parambikulam Tiger Reserve',
    distance: '98.2',
    map: 'https://maps.app.goo.gl/YuR3eG5nUMnATxu49'
  },
  {
    image: '/images/home/tourism/9.jpg',
    title: 'Nelliyampathy Hills',
    distance: '58.6',
    map: 'https://maps.app.goo.gl/Zx3q6cREo26WJ4LT7'
  },
  {
    image: '/images/home/tourism/10.jpg',
    title: 'Kava View Point',
    distance: '18.9',
    map: 'https://maps.app.goo.gl/qtCRAtJgVo4j8H5M7'
  },
  {
    image: '/images/home/tourism/11.jpg',
    title: 'Meenvallam Waterfalls',
    distance: '31.0',
    map: 'https://maps.app.goo.gl/JXTtRtq3VGnNRbFo9'
  },
  {
    image: '/images/home/tourism/12.jpg',
    title: 'Attappadi Hills',
    distance: '79.4',
    map: 'https://maps.app.goo.gl/EWUtMQH9CJ9oAhsC6'
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

   <div class="pt-0 pb-20 flex flex-col items-center gap-12 mx-auto px-6">
      <h2 class="text-gray-800 text-3xl sm:text-4xl text-center lg:text-4xl font-display font-semibold tracking-wider mt-2 ">Our Amenities</h2>
      <SliderIntegrator :items="tourismSpots" />
    </div>

    <!-- The rest of your rooms page content will go here -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">Room listings will go here...</h2>
    </div>
  </div>
</template>
