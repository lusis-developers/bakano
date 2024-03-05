<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { services } from '~/utils/Services';

gsap.registerPlugin(ScrollTrigger);

const childRef = ref<Array<{ 
  titleRef: HTMLElement | null, 
  paragraphRef: HTMLElement | null 
}> | null>(null);

function animateTitles(titleRef: HTMLElement): void {
  gsap.from(titleRef, {
    xPercent: -100,
      scrollTrigger: {
        trigger: titleRef,
        start: '-70 bottom',
        end: '+=200',
        toggleActions: 'play none none reverse',
      },
  });
};
function animateParagraphs(paragraphRef: HTMLElement): void {
  gsap.from(paragraphRef, {
    y: 100,
      scrollTrigger: {
        trigger: paragraphRef,
        start: '-20 bottom',
        end: '+=80',
        toggleActions: 'play none none reverse',
      },
  });
};

onMounted(() => {
  if (childRef.value) {
    childRef.value.forEach(child => {
      if (child.titleRef && child.paragraphRef) {
        animateTitles(child.titleRef);
        animateParagraphs(child.paragraphRef);
        console.log(child.titleRef, child.paragraphRef);
      }
    });
  }
});
</script>

<template>
  <section class="services">
    <h2 class="services__title">
      Y entonces, ¿Qué hacemos?
    </h2>
    <div class="services__content">
      <BkServicesModel
        v-for="(service, index) in services" 
        :key="index" 
        :title="service.title"
        :paragraph="service.paragraph" 
        ref="childRef" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  background-color: $white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: $desktop-upper-breakpoint) {
    padding: 96px;
  }
}
.services__title {
  font-size: 10vw;
  font-family: $primary-font;
  color: $black;
  @media (min-width: $desktop-lower-breakpoint) {
    font-size: 7vw;
  }
}
.services__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: $desktop-upper-breakpoint) {
    height: 50%;
    justify-content: space-evenly;
  }
}
</style>
