<script setup>

  useHead({
    title: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium, Koduvayur, Palakkad, Kerala',
 
    meta: [
      // SEO and Page Information
      { name: 'description', content: 'Welcome to Hotel CAPS, the premier destination in Koduvayur, Palakkad for luxury rooms, multi-cuisine restaurant dining, and elegant banquet halls, food delivery, event catering and more. Experience world-class Kerala hospitality.' },
      { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
      { name: 'author', content: 'kriz - https://www.brandsta.in' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://capsfamily.in/' },
      { property: 'og:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium, Koduvayur, Palakkad, Kerala' },
      { property: 'og:description', content: 'Welcome to Hotel CAPS, the premier destination in Koduvayur, Palakkad for luxury rooms, multi-cuisine restaurant dining, and elegant banquet halls, food delivery, event catering and more. Experience world-class Kerala hospitality.' },
      { property: 'og:image', content: '/images/favicons/android-icon-192x192.png' },

      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://capsfamily.in/' },
      { property: 'twitter:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium, Koduvayur, Palakkad, Kerala' },
      { property: 'twitter:description', content: 'Welcome to Hotel CAPS, the premier destination in Koduvayur, Palakkad for luxury rooms, multi-cuisine restaurant dining, and elegant banquet halls, food delivery, event catering and more. Experience world-class Kerala hospitality.' },
      { property: 'twitter:image', content: '/images/favicons/android-icon-192x192.png' },

    ],
  });
</script>

<template>
  <div>
    <Hero />
    <Features />
    <About />
    <CapsTouch />
    <ThematicSections />
    <Testimonials />
    <Achievements />
  </div>
</template>
