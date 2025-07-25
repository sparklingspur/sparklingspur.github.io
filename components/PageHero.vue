<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Swiper from 'swiper';
import { EffectFade, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-fade';

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
const swiperEl = ref(null);
const heroContentRef = ref(null);
const heroSectionRef = ref(null);
const isSlider = computed(() => props.images.length > 1);

// --- LIFECYCYCLE HOOKS ---
onMounted(() => {
  let ctx = gsap.context(() => {
    
    // Animate the text content once on load, with your specified parameters.
    gsap.from(heroContentRef.value.children, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'power4.out',
      stagger: 0.2
    });

    // Conditional logic for background animation
    if (isSlider.value && swiperEl.value) {
      // --- SLIDER LOGIC (2+ images) ---
      const animateSlide = (swiper) => {
        const activeImage = swiper.slides[swiper.activeIndex].querySelector('.bg-image');
        gsap.killTweensOf(activeImage);
        gsap.fromTo(activeImage, 
          { scale: 1.15 }, 
          { scale: 1, duration: 8, ease: 'power2.out' }
        );
      };

      new Swiper(swiperEl.value, {
        modules: [EffectFade, Autoplay],
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        allowTouchMove: false,
        speed: 2000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        on: {
          init: animateSlide,
          slideChangeTransitionStart: animateSlide,
        },
      });
    } 
    // --- STATIC IMAGE LOGIC (1 image) ---
    // No animation is applied here, as requested.

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
      <div v-if="isSlider" ref="swiperEl" class="swiper h-full w-full">
        <div class="swiper-wrapper">
          <div v-for="(image, index) in images" :key="index" class="swiper-slide">
            <img :src="image" :alt="`${title} background image ${index + 1}`" class="bg-image h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
      <div v-else class="h-full w-full">
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
