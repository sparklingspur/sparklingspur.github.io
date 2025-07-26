<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- PROPS ---
// This component is fully data-driven, receiving a title and an array of features.
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true,
    default: () => []
  }
});

// A ref to hold the main section element for GSAP context
const main = ref(null);

// --- ANIMATION LOGIC ---
onMounted(() => {
  // Use a GSAP context for safe animation management and cleanup.
  let ctx = gsap.context(() => {
    gsap.from('.feature-item', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1, // This creates the beautiful cascading effect
      scrollTrigger: {
        trigger: main.value,
        start: 'top 75%'
      }
    });
  }, main.value);

  onUnmounted(() => {
    ctx.revert(); // Cleanup GSAP animations
  });
});
</script>


<style scoped>

</style>

<template>
  <section ref="main" class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold tracking-wide leading-snug text-gray-800">{{ title }}</h2>
      </div>
      
      <div class="flex flex-wrap justify-around">
        
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-item mb-8 relative flex flex-col items-center justify-start text-center w-[calc(50%-1rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] xl:w-[calc(25%-1.5rem)]"
        >
          <div class="bg-blue-100 text-blue-600 inline-block p-4 rounded-full">
            <!-- This will now render our custom SVG components -->
            <component :is="feature.icon" class="w-8 h-8" />
          </div>
          <h3 class="font-sans text-xl font-bold text-gray-800 mt-4">{{ feature.title }}</h3>
          <p class="font-body w-[calc(80%)] text-gray-600 mt-2">{{ feature.description }}</p>
        </div>

      </div>
    </div>
  </section>
</template>