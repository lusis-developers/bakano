<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import { serviceImages } from '../../utils/servicesItems';
import boca from '../../assets/images/boca-megafono.png';
import oreja from '../../assets/images/oreja.png';

gsap.registerPlugin(ScrollTrigger);

let mouth = ref(null);
let ear = ref(null);
let itemsContainer = ref(null);

function animateImages() {
  const words = itemsContainer.value.children;
  
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut'
    },
    scrollTrigger: {
      trigger: itemsContainer.value,
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
  });

  gsap.utils.toArray(words).forEach((word, index) => {
    tl.fromTo(word, 
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0 },
      `+=0.5` // Delay entre palabras
    )
    .to(word, 
      { autoAlpha: 0, y: -50 },
      `+=0.5` // Mantiene la palabra visible antes de desaparecer
    );
  });
}

function animateMouth() {
  gsap.from(mouth.value, {
    scrollTrigger: {
      trigger: mouth.value,
      start: "top 90%",
      end: "top",
      scrub: true,
    },
    ease: "power2.in",
    scale: 0,
  });
  
  gsap.to(mouth.value, {
    scrollTrigger: {
      trigger: mouth.value,
      start: "top 100%",
      end: "+=3750",
      scrub: true,
    },
    y: 3000,
    ease: "power1.inOut",
  });
}


function animateEar() {
  gsap.from(ear.value, {
    scrollTrigger: {
      trigger: ear.value,
      start: "top 90%",
      end: "top",
      scrub: true
    },
    ease: "power2.in",
    scale: 0,
  });

  gsap.to(ear.value, {
    scrollTrigger: {
      trigger: ear.value,
      start: "top 100%",
      end: "+=4550",
      scrub: true
    },
    y: 3400,
    ease: "power1.inOut",
  });
}

onMounted(() => {
  animateMouth();
  animateEar();
  animateImages();
});

</script>

<template>
  <div class="services">
    <h3 class="services-title">
      Y entonces ¿Qué hacemos?
    </h3>
    <div class="services-container">
      <div class="mouth-container">
        <img
          ref="mouth"
          :src="boca"
          class="mouth">
      </div>
      <div class="ear-container">
        <img
          ref="ear"
          :src="oreja"
          class="ear">
      </div>
      <div
        ref="itemsContainer"
        class="items-container">
        <img
          v-for="(service, index) in serviceImages"
          :key="index"
          :src="service"
          :class="index">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  padding: 24px 0;
  background-color: $white;
  height: 500vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    color: $black;
    font-family: $primary-font;
    font-size: 3rem;
  }
  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .mouth-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .mouth {
        width: 240px;
        height: 160px;
      }
    }
    .ear-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .ear {
        width: 240px;
        height: 160px;
      }
    }
    .items-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  } 
}
</style>