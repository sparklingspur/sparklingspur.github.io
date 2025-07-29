<template>
    <div class="w-full px-4 pt-12 pb-28 bg-stone-100">
        <h2 class="animate-title text-gray-800 text-3xl mb-8 sm:text-4xl text-center lg:text-4xl font-display font-semibold tracking-wider mt-2 ">Write To Us</h2>
        <section class="px-4 md:px-8 py-10 mt-10 bg-stone-400 rounded-xl shadow-md max-w-7xl mx-auto">

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="flex flex-wrap gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                required
                class="flex-1 min-w-[250px] border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email"
                required
                class="flex-1 min-w-[250px] border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
      
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Your Mobile Number"
              required
              class="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-amber-500"
            />
      
            <input
              v-model="form.subject"
              type="text"
              placeholder="Subject"
              class="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-amber-500"
            />
      
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Message"
              class="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
      
            <div class="text-center">
              <button
                type="submit"
                class="hero-bubble-button px-8 py-3 rounded-xl text-white font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
      
          <div v-if="submitted" class="text-center text-green-600 mt-6 font-semibold text-lg">
            Thank you! Your message has been received.
          </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const submitted = ref(false);

function handleSubmit() {
  if (!form.name || !form.email || !form.phone) {
    alert('Name, Email and Phone are required.');
    return;
  }
  submitted.value = true;
  // Optionally reset form:
  // Object.keys(form).forEach(key => form[key] = '')
}
</script>

<style scoped>
.hero-bubble-button {
  position: relative;
  overflow: hidden;
  display: inline-block;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
  background-color: #f59e0b;
}

.hero-bubble-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #df8d00; /* amber-500 */
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  z-index: -1;
}

.hero-bubble-button:hover::before {
    transform: scaleX(1);
    background-color: #d40f0f; /* amber-500 */
}

.hero-bubble-button:hover {
  color: white;
}
</style>