<script setup>
useHead({
  title: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium, Koduvayur, Palakkad, Kerala',
  meta: [
    { name: 'description', content: 'Welcome to Hotel CAPS, the premier destination in Koduvayur, Palakkad for luxury rooms, multi-cuisine restaurant dining, and elegant banquet halls, food delivery, event catering and more. Experience world-class Kerala hospitality.' }
  ]
});
</script>

<template>
  <div>
    <!-- Hero uses Swiper.js, which must run on the client -->
    <ClientOnly>
      <Hero />
    </ClientOnly>
    
    <Features />
    <About />
    
    <!-- CapsTouch contains the YouTube Player, which must run on the client -->
    <ClientOnly>
      <CapsTouch />
    </ClientOnly>
    
    <ThematicSections />
    
    <!-- Testimonials uses Swiper.js, which must run on the client -->
    <ClientOnly>
      <Testimonials />
    </ClientOnly>
    
    <Achievements />
  </div>
</template>