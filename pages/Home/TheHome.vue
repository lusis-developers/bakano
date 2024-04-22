<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useHead({
  title: 'BAKANO | Agencia de Marketing Digital',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    {
      name: 'description',
      content: 'Agencia de Marketing Digital en Guayaquil, Ecuador. Estrategias de Marketing Digital, Diseño Web, Publicidad en Redes Sociales, SEO, SEM'
    }
  ]
})

const emit = defineEmits(['toggle-menu']);

gsap.registerPlugin(ScrollTrigger);

const headerTransitionEnded = ref(false);
const menuOpen = ref(false);

function toggleMenu():void {
  menuOpen.value = !menuOpen.value;
}
function onHeaderTransitionEnd():void {
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
      pinReparent: true,
    },
    x: '-100%',
    ease: 'none',
  });

  gsap.to(bkClients, {
    scrollTrigger: {
      trigger: bkClients,
      start: 'bottom bottom',
      scrub: 1,
      anticipatePin: 1,
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
      <BkMenu 
        :isVisible="menuOpen" 
        @close-menu="toggleMenu"/>
    </div>
    <div class="container-second-section sections">
      <Hero v-if="headerTransitionEnded"/>
    </div>
    <div class="container-third-section sections">
      <BkServices class="services" id="servicios"/>
      <BkClients class="bk-clients" id="clientes"/>
    </div>
    <div class="container-fourth-section sections">
      <BkPhilosophy id="filosofia"/> 
    </div>
    <div class="container-fifth-section sections">
      <BkContact class="bk-contact" id="contacto"/>
    </div>
    <BkFooter 
      class="bk-footer" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  &-first-section {
    background-color: $black;
    height: 15vh;
  }
  &-second-section {
    width: 100%;
    background-color: $black;
    min-height: 85vh;
    display: flex;
    align-items: center;
  }
  &-third-section {
    background-color: $white;
    .services {
      height: 120vh;
      background-color: $white;
      @media (max-width: $mobile-upper-breakpoint){
        height: 140vh;        
      }
      @media (min-width: $desktop-lower-breakpoint){        
        height: 140vh;
      }
    }
  }
  &-fourth-section {
    overflow: hidden;
    background-color: $white;
    height: 200vh;
    padding-top: 20px
  }
  &-fifth-section {
    width: 100%;
    background-color: $white;
    height: 93vh;
  }
}
.bk-footer{
  height: 7vh;
  @media (max-width: $mobile-upper-breakpoint){
    height: 100%;
  }
}
</style>