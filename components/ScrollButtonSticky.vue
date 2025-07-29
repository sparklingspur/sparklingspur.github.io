<template>
  <button
    v-show="showButton"
    :class="[
      'fixed right-2 lg:right-6 z-30 transition-opacity duration-300 ease-in-out',
      isOverFooter ? 'bottom-[calc(var(--footer-height,120px)+1rem)]' : 'lg:bottom-6 bottom-2'
    ]"
    class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600"
    @click="scrollToTarget"
    aria-label="Scroll to top or bottom"
  >
    <PhCaretDown :size="24" :class="{ 'rotate-180': isAtBottom }" class="transition-transform duration-300" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { PhCaretDown } from '@phosphor-icons/vue';

const showButton = ref(false);
const isAtBottom = ref(false);
const isOverFooter = ref(false);
const footerHeight = ref(120); // fallback if detection fails

const scrollToTarget = () => {
  if (isAtBottom.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const winH = window.innerHeight;
  const docH = document.documentElement.scrollHeight;

  showButton.value = scrollY > window.innerHeight * 0.4;
  isAtBottom.value = scrollY + winH >= docH - 2;

  const footer = document.querySelector('footer');
  if (footer) {
    const rect = footer.getBoundingClientRect();
    isOverFooter.value = rect.top < winH;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
button {
  transition: bottom 0.3s ease;
}
</style>
