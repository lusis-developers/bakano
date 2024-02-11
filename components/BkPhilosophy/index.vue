<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let image1 = ref(null);
let image2 = ref(null);

onMounted(() => {
  gsap.from(image1.value, {
    scrollTrigger: {
      trigger: image1.value,
      start: 'top bottom',
      end: '+=500',
      scrub: true,
    },
    x: '-100%',
    y: '100%',
    duration: 2,
  });
})
</script>

<template>
  <div class="container">
    <h3 class="container-title">Nuestra filosofía</h3>
    <figure class="container-image">
      <img 
        ref="image1"
        class="container-image-eloy"
        src="~/assets/images/eloyalfaro-bn.png"
        alt="Eloy Alfaro">
    </figure>
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
  }
  &-image {
    height: inherit;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    align-items: start;
    max-width: $desktop-lower-breakpoint;
    margin: 0 auto;
    &-eloy {
      width: 100%;
      object-fit: cover;
      @media (min-width: $tablet-lower-breakpoint) {
        width: 512px;
        height: 512px;
      }      
    }
  }
}
</style>