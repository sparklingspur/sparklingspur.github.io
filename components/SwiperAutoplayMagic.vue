<template>
  <section id="swiper-autoplay-magic" ref="swiperEl" class="swiper relative w-full h-48 md:h-56 lg:h-64 ">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in items"
        :key="item.id || index"
        class="swiper-slide relative group h-full overflow-hidden rounded-xl"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class=" h-full object-cover object-center w-auto transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError($event, index)"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, FreeMode, Keyboard } from 'swiper/modules';
import 'swiper/css';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const swiperEl = ref(null);

const handleImageError = (e, index) => {
  e.target.src = `https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+${index + 1}`;
};

onMounted(() => {
  if (swiperEl.value) {
    new Swiper(swiperEl.value, {
      modules: [Autoplay, FreeMode, Keyboard],
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 16,
      freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0.5,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
    });
  }
});

</script>

<style scoped>
/* No additional styles yet - animations handled via tailwind */
.swiper-slide{
 width: fit-content;
}
</style>
