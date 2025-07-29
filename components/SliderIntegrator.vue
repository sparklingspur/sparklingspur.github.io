<template>
  <div class="relative">
    <!-- Slider Only -->
    <SwiperAutoplayMagic
      :items="items"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SwiperAutoplayMagic from '~/components/SwiperAutoplayMagic.vue';

const props = defineProps({
  items: { type: Array, required: true }
});

</script>

<style scoped>
</style>
