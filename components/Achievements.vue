<template>
  <section id="achievements-section" class="bg-stone-50 py-16 sm:py-20 lg:py-24 dotted-bg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-gray-800 text-4xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-wider mt-2">Our Achievements in Numbers</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-4 sm:gap-8">

        <div 
          v-for="(stat, index) in achievements" 
          :key="index"
          class="achievement-card p-4 sm:p-6 lg:p-10 rounded-xl shadow-lg text-center flex flex-col items-center justify-center aspect-square shadow-[inset_-24px_-18px_40px_#46464620] shadow-[2px_11px_21px_5px_rgba(0,_0,_0,_0.2)] w-[calc(47.5%)] sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
          :class="stat.colorClass"
        >
          <component :is="stat.iconComponent" class="text-4xl sm:text-5xl" weight="regular" />
          <h3 class="font-serif-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black mt-4">
            <span :ref="el => { if (el) statNumbers[index] = el }">{{ stat.startNumber }}</span>{{ stat.suffix }}
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600 tracking-wide">{{ stat.label }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhUsersThree, PhForkKnife, PhCalendarCheck, PhSparkle } from '@phosphor-icons/vue';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Data for our achievement cards. To add/edit a card, just change this array.
const achievements = shallowRef([
  { 
    iconComponent: PhUsersThree, 
    colorClass: 'bg-amber-400 text-amber-900',
    startNumber: 0,
    targetNumber: 5, 
    suffix: 'K+', 
    label: 'Guests Hosted' 
  },
  { 
    iconComponent: PhForkKnife, 
    colorClass: 'bg-emerald-400 text-emerald-800',
    startNumber: 0,
    targetNumber: 300, 
    suffix: 'K+', 
    label: 'Customers Served' 
  },
  { 
    iconComponent: PhCalendarCheck, 
    colorClass: 'bg-rose-400 text-rose-800',
    startNumber: 0,
    targetNumber: 250, 
    suffix: '+', 
    label: 'Events Conducted' 
  },
  { 
    iconComponent: PhSparkle, 
    colorClass: 'bg-sky-400 text-blue-800',
    startNumber: 0,
    targetNumber: 100, 
    suffix: '%', 
    label: 'Fulfilling Experience' 
  }
]);

// An array to hold the references to our number spans
const statNumbers = ref([]);

onMounted(() => {
  // --- Animate Cards into view ---
  gsap.from(".achievement-card", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#achievements-section",
      start: "top 65%",
      toggleActions: "play none none none",
    }
  });

  // --- Animate each number counting up ---
  statNumbers.value.forEach((el, index) => {
    const stat = achievements.value[index];
    const proxy = { val: stat.startNumber };

    gsap.to(proxy, {
      val: stat.targetNumber,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        el.textContent = Math.floor(proxy.val); // Update the text content on each frame
      }
    });
  });
});
</script>

<style scoped>
.dotted-bg {
  background-image: radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 3px, transparent 0);
  background-size: 2rem 2rem;
}
.font-serif-thin {
    font-family: 'Cinzel', serif;
}
</style>