<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';

// --- PROPS ---
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

// --- REFS & COMPUTED ---
const heroContentRef = ref(null);
const heroSectionRef = ref(null);
const bgImageRef = ref(null);

// --- LIFECYCYCLE HOOKS ---
onMounted(() => {
  let ctx = gsap.context(() => {

    gsap.from(bgImageRef.value, {
      delay: 0,
      opacity: 0.5,
      scale: 1.15,
      duration: 2.5,
      ease: 'power5.out'
    });
    
    // Animate the text content once on load, with your specified parameters.
    gsap.from(heroContentRef.value.children, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.3
    });

  }, heroSectionRef.value);

  onUnmounted(() => {
    ctx.revert();
  });
});
</script>

<template>
  <section ref="heroSectionRef" class="relative h-[60vh] portrait:h-[45vh]  w-full flex items-center text-white overflow-hidden">
    <!-- Background Layer (z-0) -->
    <div class="absolute inset-0 z-0">
      
      <div ref="bgImageRef" class="h-full w-full">
        <img v-if="images.length > 0" :src="images[0]" :alt="`${title} background image`" class="bg-image h-full w-full object-cover" loading="lazy" />
      </div>
    </div>

    <!-- Tint Overlay (z-5) -->
    <div class="absolute inset-0 bg-black/70 z-5"></div>

    <!-- Text Content Layer (z-10) -->
    <div class="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
      <div ref="heroContentRef" class="max-w-3xl xl:max-w-4xl text-left mt-20">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold lg:font-semibold tracking-widest leading-snug sm:leading-normal">{{ title }}</h1>
        <p class="font-body text-md sm:text-xl mt-0 sm:mt-4 font-light opacity-90 tracking-wider">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>
