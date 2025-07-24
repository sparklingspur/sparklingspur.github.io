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
    <!-- 
      The following components use browser-only libraries (Swiper, GSAP ScrollTrigger, YouTube API).
      Wrapping them in <ClientOnly> is the correct, state-of-the-art way to prevent
      server-side rendering errors during the `npm run generate` command.
    -->
    <ClientOnly>
      <Hero />
    </ClientOnly>
    
    <ClientOnly>
      <Features />
    </ClientOnly>
    
    <ClientOnly>
      <About />
    </ClientOnly>
    
    <ClientOnly>
      <CapsTouch />
    </ClientOnly>
    
    <ClientOnly>
      <ThematicSections />
    </ClientOnly>
    
    <ClientOnly>
      <Testimonials />
    </ClientOnly>
    
    <ClientOnly>
      <Achievements />
    </ClientOnly>
  </div>
</template>
