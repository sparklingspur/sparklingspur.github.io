<template>
  <section ref="heroSectionRef" class="relative h-[100vh] sm:h-[70vh] lg:h-[100vh] w-full flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        ref="bgImageRef"
        :src="slide.image"
        :alt="slide.alt"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="absolute bottom-0 left-0 w-full h-32 pointer-events-none gradient-fade-bottom"></div>
    </div>

    <!-- Foreground Content -->
    <div ref="heroContentRef" class="relative z-10 text-center flex flex-col items-center text-white px-4">
      <h1 class="font-display opacity-90 text-4xl max-w-sm sm:max-w-lg md:max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-widest lg:tracking-widest md:leading-normal sm:leading-normal lg:leading-normal leading-relaxed">{{ slide.title }}</h1>
      <p class="font-body text-center max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl opacity-90 tracking-wider leading-relaxed ">
        {{ slide.subtitle }}
      </p>
      <div>
        <NuxtLink
          to="/contact"
          class="hero-bubble-button text-lg sm:text-xl lg:text-xl font-display tracking-wider mt-8 inline-block font-normal py-3 px-8 rounded-lg"
        >
          {{ slide.buttonText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const heroSectionRef = ref(null);
const heroContentRef = ref(null);
const bgImageRef = ref(null);

const slide = {
  image: '/images/home/hero/caps-hero.webp',
  alt: 'A welcoming view of Hotel CAPS',
  title: 'Welcome to Hotel CAPS',
  subtitle:
    'A premier destination for pleasant stays, delicious food and memorable events in the heart of Palakkad, Kerala.',
  buttonText: 'Get in Touch'
};

const config = useRuntimeConfig();
const initDelay = config.public.initialAnimationDelay;

onMounted(() => {

  function changeDelay() {
    const config = useRuntimeConfig();
    config.public.initialAnimationDelay = 0;
  }

  const ctx = gsap.context(() => {

    gsap.from(bgImageRef.value, {
      delay: initDelay,
      opacity: 1,
      scale: 1.15,
      duration: 2.5,
      ease: 'power5.out'
    });

    gsap.from(heroContentRef.value.children, {
      delay: initDelay,
      opacity: 0,
      y: 30,
      duration: 1.8,
      stagger: 0.6,
      ease: 'power5.out',
      onComplete: changeDelay()
    });
  }, heroSectionRef.value);

  onUnmounted(() => {
    ctx.revert();
  });
});
</script>

<style scoped>
.hero-bubble-button {
  position: relative;
  overflow: hidden;
  display: block;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
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
  transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  z-index: -1;
}

.hero-bubble-button:hover {
  border: 2px solid #F97715;
}

.hero-bubble-button:hover::before {
  transform: scaleX(1);
}

.gradient-fade-bottom {
  pointer-events: none;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  backdrop-filter: blur(2px);
}
</style>
