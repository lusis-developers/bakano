<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const emit = defineEmits(['toggle-menu']);

gsap.registerPlugin(ScrollTrigger);

const headerTransitionEnded = ref(false);
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function onHeaderTransitionEnd() {
  headerTransitionEnded.value = true;
}
onMounted(() => {
  const bkClients = document.querySelector('.bk-clients');

  gsap.to(bkClients, {
    scrollTrigger: {
      trigger: bkClients,
      start: 'bottom bottom',
      scrub: true,
      anticipatePin: 1
    },
    x: '-100%',
    ease: 'none',
    backgroundColor: 'green'
  });
});
</script>

<template>
  <div class="container">
    <div class="container-first-section">
      <BkHeader 
        :colorLogo="menuOpen" 
        @toggle-menu="toggleMenu"  
        @header-transition-end="onHeaderTransitionEnd"/>
      <BkMenu :isVisible="menuOpen" @close-menu="toggleMenu"/>
    </div>
    <div class="container-second-section">
      <Hero v-if="headerTransitionEnded"/>
    </div>
    <div class="container-third-section">
      <BkServices class="bk-services"/>
      <BkClients class="bk-clients"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  &-first-section {
    background-color: $black;
  }
  &-second-section {
    width: 100%;
    background-color: $black;
    height: 100vh;
  }

}
</style>