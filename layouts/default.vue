<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { PhCaretDown } from '@phosphor-icons/vue';

// --- STATE MANAGEMENT ---
const isMenuOpen = ref(false);
const isScrolled = ref(false);
// Tracks which desktop dropdown menu is currently active (toggled by click/hover)
const activeDropdown = ref(null);

// --- NAVIGATION DATA ---
// Updated with "View" links for parent items.
const navLinks = ref([
  {
    text: 'Home',
    link: '/',
    subLinks: [
      { text: 'View Home', link: '/' },
      { text: 'About Us', link: '/about' },
    ]
  },
  {
    text: 'Rooms',
    link: '/rooms',
    subLinks: [
      { text: 'View Rooms', link: '/rooms' },
      { text: 'Pricing', link: '/pricing' },
    ]
  },
  {
    text: 'Restaurant',
    link: '/restaurant',
    subLinks: [
      { text: 'View Restaurant', link: '/restaurant' },
      { text: 'Our Menu', link: '/menu' },
    ]
  },
  {
    text: 'Auditorium',
    link: '/hall',
    subLinks: [
      { text: 'View Hall', link: '/hall' },
      { text: 'Our Catering', link: '/catering' },
    ]
  }
]);

// --- METHODS ---
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Toggles the desktop dropdown menu
const toggleDropdown = (itemName) => {
  if (activeDropdown.value === itemName) {
    activeDropdown.value = null; // Close if already open
  } else {
    activeDropdown.value = itemName; // Open if closed
  }
};

// Opens dropdown on hover
const openDropdownOnHover = (itemName) => {
  if (itemName) {
    activeDropdown.value = itemName;
  }
};

// Closes dropdown on mouse leave
const closeDropdownOnMouseLeave = () => {
  activeDropdown.value = null;
};

// --- SCROLL, CLICK-AWAY & VIEWPORT HANDLING ---

// Watch for changes in the mobile menu state to apply/remove locks
watch(isMenuOpen, (isOpen) => {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (isOpen) {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    // Prevent all zooming
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    }
  } else {
    // Restore background scrolling
    document.body.style.overflow = '';
    // Restore zooming capabilities
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
    }
  }
});

// --- SCROLL & CLICK-AWAY HANDLING ---
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const fortyVh = window.innerHeight * 0.1;
  isScrolled.value = scrollPosition > fortyVh;
  activeDropdown.value = null; // Close dropdown on scroll
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.desktop-nav-container');
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    activeDropdown.value = null;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div>
    <!-- HEADER -->
    <header 
      class="fixed top-0 left-0 w-full lg:px-0 xl:px-4 z-30 transition-all duration-300 ease-in-out"
      :class="{ 
        'bg-transparent': !isScrolled, 
        'bg-zinc-900/90 backdrop-blur-lg shadow-lg': isScrolled 
      }"
    >
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- LOGO -->
          <NuxtLink to="/" class="flex items-end space-x-2 xl:space-x-3 ">
            <img src="/images/caps-solid-logo.png" alt="Hotel CAPS Logo" class="h-8 sm:h-10 w-auto" />
            <div class="text-white font-medium font-display text-3xl leading-6 sm:text-3xl xl:text-4xl tracking-wider xl:leading-9 lg:leading-8 sm:leading-7">
              <span class="">HOTEL </span>
              <span class="font-semibold">CAPS</span>
            </div>
          </NuxtLink>

          <!-- DESKTOP NAVIGATION -->
          <nav class="hidden lg:flex items-center space-x-8 mt-1 desktop-nav-container">
            <div 
              v-for="navItem in navLinks" 
              :key="navItem.text"
              class="relative"
              @mouseenter="openDropdownOnHover(navItem.text)"
              @mouseleave="closeDropdownOnMouseLeave"
            >
              <!-- Main navigation link -->
              <a 
                href="#"
                @click.prevent="toggleDropdown(navItem.subLinks.length > 0 ? navItem.text : null)"
                class="flex items-center xl:text-lg text-white font-display tracking-wider hover:text-amber-500 transition-all duration-300"
              >
                {{ navItem.text }}
                <PhCaretDown :class="{ 'rotate-180': activeDropdown === navItem.text }" v-if="navItem.subLinks.length > 0" :size="16" class="ml-1 transition-all duration-300" />
              </a>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div 
                  v-if="navItem.subLinks.length > 0 && activeDropdown === navItem.text"
                  class="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-40 rounded-t-none rounded-md shadow-2xl overflow-hidden"
                >
                  <ul class="pb-2" :class="{ 
                    'bg-zinc-900/20 backdrop-blur-lg': !isScrolled, 
                    'bg-zinc-900/90 backdrop-blur-lg shadow-lg': isScrolled 
                  }">
                    <li v-for="subLink in navItem.subLinks" :key="subLink.text">
                      <NuxtLink 
                        :to="subLink.link" 
                        @click="activeDropdown = null"
                        class="flex items-center border-t border-slate-50 justify-center h-10 px-4 text-sm font-medium text-gray-200 hover:bg-amber-500/10 hover:text-amber-500 border-b border-white/10 transition-colors duration-200 last:border-b-0"
                      >
                        {{ subLink.text }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          </nav>

          <!-- CONTACT BUTTON -->
          <div class="hidden lg:block">
            <NuxtLink to="/contact" class="contact-bubble-button xl:text-lg font-display py-2 px-8 mt-2 xl:ml-20 rounded-lg">
              Contact Us
            </NuxtLink>
          </div>

          <!-- MOBILE HAMBURGER BUTTON -->
          <!-- The hamburger button is defined here for logical organization -->
          <!-- but Teleported to the body for correct z-index stacking. -->
          <ClientOnly>
            <Teleport to="body">
              <div class="fixed top-0 right-0 h-20 z-50 lg:hidden flex items-center pt-2 pr-4 sm:pr-6">
                  <button @click="toggleMenu" class="hamburger-button" aria-label="Toggle menu">
                      <span class="line top" :class="{ 'toggled': isMenuOpen }"></span>
                      <span class="line bottom" :class="{ 'toggled': isMenuOpen }"></span>
                  </button>
              </div>
            </Teleport>
          </ClientOnly>


        </div>
      </div>
    </header>

    <!-- MOBILE OVERLAY MENU -->
    <Transition name="overlay">
      <div v-if="isMenuOpen" class="mobile-menu-overlay fixed inset-0 bg-gradient-to-t from-slate-950 via-zinc-990 to-slate-900 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-8">
        <nav class="flex flex-col items-center text-center space-y-6">
          <div v-for="navItem in navLinks" :key="navItem.text" class="text-white">
            <NuxtLink :to="navItem.link" @click="closeMenu" class="font-serif text-4xl hover:text-amber-500 transition-colors duration-300">
              {{ navItem.text }}
            </NuxtLink>
            <div v-if="navItem.subLinks.length > 0" class="mt-2 space-y-2">
              <NuxtLink 
                v-for="subLink in navItem.subLinks.filter(link => !link.text.startsWith('View'))" 
                :key="subLink.text"
                :to="subLink.link" 
                @click="closeMenu"
                class="block font-sans text-xl text-gray-300 hover:text-amber-500 transition-colors duration-300 "
              >
                {{ subLink.text }}
              </NuxtLink>
            </div>
          </div>
        </nav>
        <NuxtLink to="/contact" @click="closeMenu" class="contact-bubble-button mt-6 py-3 px-8 text-xl rounded-lg font-semibold border-2 border-white text-white transition-all duration-300">
          Contact Us
        </NuxtLink>
      </div>
    </Transition>

    <!-- MAIN PAGE CONTENT -->
    <main>
      <slot />
    </main>

    <ScrollButtonSticky />
    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<style scoped>
/* --- Contact Button Style (replicated from Hero) --- */
.contact-bubble-button {
  position: relative;
  display: inline-block;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
  border: 1px solid white;
  color: white;
}
.contact-bubble-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #F97715;
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  z-index: -1;
}
.contact-bubble-button:hover {
  border: 1px solid #F97715;
}
.contact-bubble-button:hover::before {
  transform: scaleX(1);
}

/* --- Animated Hamburger Button --- */
.hamburger-button {
  width: 32px;
  height: 24px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}
.hamburger-button .line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out;
}
.hamburger-button .line.top {
  top: 4px;
}
.hamburger-button .line.bottom {
  bottom: 4px;
}
.hamburger-button .line.top.toggled {
  top: 11px;
  transform: rotate(45deg);
}
.hamburger-button .line.bottom.toggled {
  bottom: 11px;
  transform: rotate(-45deg);
}

/* --- Dropdown Menu Transition --- */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-50px) translateX(-50%);
}

/* --- Mobile Overlay Menu Transition --- */

.mobile-menu-overlay {
  touch-action: manipulation;
  overflow-y: auto;
}
/* This rule only applies when the screen is wider than it is tall (landscape)
   and the height is very short (less than 500px). */
@media (orientation: landscape) and (max-height: 500px) {
  .mobile-menu-overlay {
    justify-content: flex-start; /* Aligns items to the top */
    padding-top: 4rem; /* Adds space above the menu items */
    padding-bottom: 4rem;
  }
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.4s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
