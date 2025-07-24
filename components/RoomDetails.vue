<script setup>
import { PhCheckCircle } from '@phosphor-icons/vue';

defineProps({
  room: { type: Object, required: true },
  extraCharges: { type: Object, required: true }
});
</script>

<template>
  <div class="p-4 sm:p-8 bg-gradient-to-b from-amber-200 to-yellow-300 rounded-2xl border border-amber-200 shadow-lg h-full flex flex-col">
    
    <h3 class="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide text-center mb-6 font-semibold text-gray-800">{{ room.name }}</h3>

    <div class="bg-amber-50 p-4 rounded-2xl mb-4">
        
        <div class="my-4">
          <span class="font-number text-4xl sm:text-5xl font-medium text-gray-900">₹{{ room.price }}</span>
          <span class="font-sans text-gray-500">/ night</span>
        </div>
        
        <div class="text-sm text-gray-500 space-y-1 mb-2 border-t border-b border-gray-200 py-3">
            <p>+ ₹{{ extraCharges.extraBed }} for an extra bed</p>
            <p>+ ₹{{ extraCharges.extraPerson }} for an extra person</p>
            <p>*GST added extra</p>
        </div>
    </div>

    <p class="font-body text-gray-600 flex-grow">{{ room.description }}</p>

    <ul class="mt-4 space-y-3">
      <li v-for="feature in room.features" :key="feature" class="flex items-center">
        <PhCheckCircle :size="20" class="text-amber-500 mr-3 flex-shrink-0" weight="fill" />
        <span class="font-sans text-gray-700">{{ feature }}</span>
      </li>
    </ul>

    <a href="/contact" class="mt-8 block w-full bg-stone-900 text-white text-center font-bold py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-300">
      Book Now
    </a>
  </div>
</template>
