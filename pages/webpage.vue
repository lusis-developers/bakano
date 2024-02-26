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
  const services = document.querySelector('.services');
  const bkClients = document.querySelector('.bk-clients');
  const BkContact = document.querySelector('.bk-contact');

  gsap.to(services, {
    scrollTrigger: {
      trigger: services,
      start: 'bottom bottom',
      end: '+=500',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // snap: 1
    },
    x: '-100%',
    ease: 'none',
    backgroundColor: 'blue'
  });

  gsap.to(bkClients, {
    scrollTrigger: {
      trigger: bkClients,
      start: 'bottom bottom',
      scrub: 1,
      anticipatePin: 1,
      snap: 1 
    },
    x: '-100%',
  });

  gsap.from(BkContact, {
    scrollTrigger: {
      trigger: BkContact,
      start: 'top bottom',
      end: 'center center',
      scrub: 1,
      id: 'contact',
      // anticipatePin: 1,
      markers: true,
    },
    x: '-100%',
  }); 
});
</script>

<template>
  <div class="container">
    <div class="container-first-section sections">
      <BkHeader 
        :colorLogo="menuOpen" 
        @toggle-menu="toggleMenu"  
        @header-transition-end="onHeaderTransitionEnd"/>
      <BkMenu :isVisible="menuOpen" @close-menu="toggleMenu"/>
    </div>
    <div class="container-second-section sections">
      <Hero v-if="headerTransitionEnded"/>
    </div>
    <div class="container-third-section sections">
      <div class="services"></div>
      <BkClients class="bk-clients"/>
    </div>
    <div class="container-fourth-section sections">
      <BkPhilosophy/> 
    </div>
    <div class="container-fifth-section sections">
      <BkContact class="bk-contact"/>
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
  &-third-section {
    background-color: $white;
    .services {
      height: 100vh;
      background-color: $white;
    }
  }
  &-fifth-section {
    width: 100%;
    background-color: $white;
    height: 100vh;
  }
}
</style>