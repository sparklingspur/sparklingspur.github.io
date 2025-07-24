<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define the props for this component. It requires a videoId.
const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
});

// Refs to target our DOM elements
const playerContainer = ref(null);
const playerDiv = ref(null);
let player; // Variable to hold the YouTube player instance

// --- LAZY LOADING & API SETUP ---

// This function loads the YouTube Iframe API script
const loadYouTubeAPI = () => {
  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = createPlayer;
  }
};

// This function creates the actual YouTube player instance
const createPlayer = () => {
  if (!playerDiv.value) return;
  player = new YT.Player(playerDiv.value, {
    height: '100%',
    width: '100%',
    videoId: props.videoId,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: props.videoId,
      playsinline: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      // FIX: Add the origin parameter. This tells YouTube which site is allowed to control the player.
      // window.location.origin dynamically gets the correct origin for both localhost and your live domain.
      origin: window.location.origin
    },
    events: {
      'onReady': (event) => {
        event.target.mute();
        event.target.playVideo();
      }
    }
  });
};

// --- INTERSECTION OBSERVER FOR LAZY LOADING ---
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadYouTubeAPI();
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '200px',
    }
  );

  if (playerContainer.value) {
    observer.observe(playerContainer.value);
  }
});

// Clean up the observer when the component is unmounted
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  if (player) {
    player.destroy();
  }
  window.onYouTubeIframeAPIReady = null;
});
</script>

<template>
  <div ref="playerContainer" class="youtube-player-container">
    <div class="aspect-ratio-box">
      <div class="player-iframe">
        <div ref="playerDiv"></div>
      </div>
      <div class="interaction-blocker"></div>
    </div>
  </div>
</template>

<style scoped>
.youtube-player-container {
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.player-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.interaction-blocker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
