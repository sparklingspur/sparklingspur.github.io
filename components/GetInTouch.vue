<template>
  <section id="get-in-touch" class="bg-stone-700 text-white pt-12 lg:pt-20 lg:pb-20 pb-12 px-4">
      <h2 class="animate-title text-gray-800 text-3xl mb-12 sm:text-4xl text-center lg:text-4xl font-display text-white font-semibold tracking-wider mt-2 ">Get In Touch</h2>
    <div
      class="max-w-7xl mx-auto justify-center bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-3xl px-6 py-4 flex flex-wrap justify-around relative text-center"
    >
      <div class="contact-card flex flex-col items-center px-8 relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] py-2">
        <div class="mb-2 bg-white text-amber-500 rounded-full p-2">
          <IconLocation class="w-6 h-6" />
        </div>
        <p class="text-xl font-semibold">Address</p>
        <p class="font-bold ">Main Road, Pittupeedika, Koduvayur, Palakkad - 678501</p>
      </div>

      <div class="contact-card flex flex-col items-center px-4 relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] py-2">
        <div class="mb-2 bg-white text-amber-500 rounded-full p-2">
          <IconEnvelope class="w-6 h-6" />
        </div>
        <p class="text-xl font-semibold">Send Email</p>
        <a href="capsfamilybakes@gmail.com" class=" font-bold transition-all duration-300 hover:text-stone-100 hover:underline">
            <span>capsfamilybakes@gmail.com</span>
        </a>
      </div>

      <div class="contact-card flex flex-col items-center px-4 relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] py-2">
        <div class="mb-2 bg-white text-amber-500 rounded-full p-2">
          <IconPhone class="w-6 h-6" />
        </div>
        <p class="text-xl font-semibold">Call Us</p>
        <a href="tel:+919207517064" class="flex items-center font-bold transition-all duration-300 hover:text-stone-100 hover:underline">
            <span>+91 92075 17064</span>
        </a>
        <a href="tel:+918848369567" class="flex items-center font-bold transition-all duration-300 hover:text-stone-100 hover:underline">
            <span>+91 8848 369 567</span>
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center py-6 w-full">
        <NuxtLink to="/contact" class="hero-bubble-button animate-button cursor-pointer text-lg font-display transition-all duration-300 tracking-wider mt-8 block font-normal py-3 px-8 rounded-lg">
            Contact Us
        </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import IconLocation from '@/components/icons/IconLocation.vue';
import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import IconPhone from '@/components/icons/IconPhone.vue';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  gsap.from('.contact-card', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.25,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '#get-in-touch',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

    gsap.from(".animate-title", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#get-in-touch",
      start: "top 85%",
    },
  });

  gsap.from(".animate-button", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#get-in-touch",
      start: "top 75%",
    },
  });
});

</script>

<style scoped>

.hero-bubble-button {
  position: relative;
  overflow: hidden;
  display: inline-block;
  transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
  border: 2px solid white;
  color: white;
}

.hero-bubble-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F97715;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  z-index: -1;
}

.hero-bubble-button:hover {
  border: 2px solid #F97715;
}

.hero-bubble-button:hover::before {
  transform: scaleX(1);
}
</style>