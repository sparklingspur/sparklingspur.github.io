<script setup>


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
      { property: 'og:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://capsfamily.in/' },
      { property: 'twitter:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium, Koduvayur, Palakkad, Kerala' },
      { property: 'twitter:description', content: 'Welcome to Hotel CAPS, the premier destination in Koduvayur, Palakkad for luxury rooms, multi-cuisine restaurant dining, and elegant banquet halls, food delivery, event catering and more. Experience world-class Kerala hospitality.' },
      { property: 'twitter:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

    ],
  });
</script>

<template>
  <div>
    <HomeHero />
    <Features />
    <About />
    <CapsTouch />
    <ThematicSections />
    <div class="lg:pt-20 lg:pb-28 pt-12 pb-20 flex flex-col items-center gap-12 mx-auto px-2 lg:px-6">
      <h2 class="text-gray-800 text-3xl sm:text-4xl text-center lg:text-4xl font-display font-semibold tracking-wider mt-2 ">Explore Nearby Attractions</h2>
      <SliderIntegrator :items="tourismSpots" />
    </div>
    <Achievements />
    <Testimonials />
    <GetInTouch />
  </div>
</template>
