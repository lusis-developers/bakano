<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let mouth = ref(null);
let ear = ref(null);

onMounted(() => {
  gsap.from(mouth.value, {
    scrollTrigger: {
      trigger: mouth.value,
      start: "top 80%",
      end: "+=1000",
      markers: true,
      scrub: true,
    },
    x: 1000,
    ease: "power2.in",
    rotate: 180,
  });
  
  gsap.to(mouth.value, {
    scrollTrigger: {
      trigger: mouth.value,
      start: "top 80%",
      end: "+=3750",
      markers: true,
      scrub: true,
    },
    y: 3000,
    ease: "power2.inOut",
  });

  gsap.from(ear.value, {
    scrollTrigger: {
      trigger: ear.value,
      start: "top 80%",
      end: "+=1000",
      scrub: true
    },
    x: -1000,
    ease: "power2.in",
    rotate: 180,
  });

  gsap.to(ear.value, {
    scrollTrigger: {
      trigger: ear.value,
      start: "top 80%",
      end: "+=4550",
      scrub: true
    },
    y: 3400,
    ease: "power2.inOut",
  });
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
          src="../assets/images/boca-megafono.png"
          class="mouth">
      </div>
      <div class="ear-container">
        <img
          ref="ear"
          src="../assets/images/oreja.png"
          class="ear">
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
  } 
}
</style>