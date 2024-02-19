<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let image1 = ref(null);
let image2 = ref(null);
let animationCompleted = ref(false);

function moveGlasses() {
  gsap.to(image2.value, {
    scrollTrigger: {
      trigger: image2.value,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true,
    },
    y: '0%',
    x: '0%',
    opacity: 1,
    duration: 2,
    delay: 2,
  })
}

onMounted(() => {
  gsap.from(image1.value, {
    scrollTrigger: {
      trigger: image1.value,
      start: 'top center',
      end: '+=20%',
      scrub: true,
      markers: true,
    },
    x: '-100%',
    y: '100%',
    duration: 2,
    onComplete: () => { animationCompleted.value = true; } 
  });
})
</script>

<template>
  <div class="container">
    <h3 class="container-title">Nuestra filosofía</h3>
    <div class="container-principal">
      <figure class="container-principal-image">
        <img 
          ref="image1"
          class="container-principal-image-eloy"
          src="~/assets/images/eloyalfaro-bn.png"
          alt="Eloy Alfaro">
        <img
          ref="image2"
          class="container-principal-image-glasses"
          src="~/assets/images/gafas.jpg"
          alt="gafas super cool" />
      </figure>
      <div class="container-principal-message">
        <BkPhilosophyBkModel 
          :isAnimationCompleted="animationCompleted"
          @moveGlasses="moveGlasses"/>
      </div>
    </div>
    <div class="supercontainer"></div>
  </div>  
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 0 24px;
  width: 100%;
  background-color: $white;
  display: flex;
  flex-direction: column;
  gap: 48px;
  &-title {
    text-align: center;
    font-size: 3rem;
    color: $black;
    padding: 56px;
  }
  &-principal {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    padding-top: 160px;
    &-image {
      max-width: $desktop-lower-breakpoint;
      height: inherit;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      @media (min-width: $tablet-lower-breakpoint) {
        width: 35%;
      }
      &-eloy {
        width: 100%;
        object-fit: cover;
        position: relative;
        @media (min-width: $tablet-lower-breakpoint) {
          width: 512px;
          height: 512px;
        }
      }
      &-glasses {
        width: 50%;
        object-fit: cover;
        position: absolute;
        top: 16%;
        opacity: 0;
      }
    }
    &-message {
      width: 100%;
      @media (min-width: $tablet-lower-breakpoint) {
        width: 60%;
      }
    }
  }
  .supercontainer {
    height: 100vh;
  }
}
</style>