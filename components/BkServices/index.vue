<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { services } from '~/utils/Services';

gsap.registerPlugin(ScrollTrigger);

const childRef = ref<Array<{ 
  titleRef: HTMLElement | null, 
  paragraphRef: HTMLElement | null 
}> | null>(null);
const circleLargeRef = ref<HTMLElement | null>(null);
const circleMediumRef = ref<HTMLElement | null>(null);
const circleSmallRef = ref<HTMLElement | null>(null);
const isDesktop:boolean = globalThis.innerWidth >= 1024;

function animateCircles(): void {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.services',
      start: 'top center',
      end: '90% 80%',
      scrub: 1,
    },
  });
  timeline.to(circleLargeRef.value, {
    x: '-100vw',
    y: '30vh',
    rotate: 60,
    duration: 2,
    ease: 'power1.in',
  });
  timeline.to(circleMediumRef.value, {
    x: '-100vw',
    y: '30vh',
    rotate: 60,
    duration: 2,
    ease: 'power1.in',
  }, '-=1');
  timeline.to(circleSmallRef.value, {
    x: '-100vw',
    y: '30vh',
    rotate: 60,
    duration: 2,
    ease: 'power1.in',
  }, '-=1');
}
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
      }
    });
  }
  if(isDesktop){
    animateCircles();
  }
});
</script>

<template>
  <section class="services">
    <div v-if="isDesktop" class="circle circle-large" ref="circleLargeRef"></div>
    <div v-if="isDesktop" class="circle circle-medium" ref="circleMediumRef"></div>
    <div v-if="isDesktop" class="circle circle-small" ref="circleSmallRef"></div>
    <h1 class="services__title">
      Y entonces, ¿Qué hacemos?
    </h1>
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
  @media (min-width: $desktop-lower-breakpoint) {
    height: 50%;
    gap: 48px;
    justify-content: space-evenly;
  }
}
.circle{
  position: absolute;
  background-color: $pink;
  border-radius: 50%;
  text-shadow: 4px -4px 0px black;
  &-large{
    width: 600px;
    height: 600px;
    top: 0;
    right: 0;
    z-index: -10;
  }
  &-medium{
    width: 400px;
    height: 400px;
    bottom: 20%;
    left: 40%;
  }
  &-small{
    width: 200px;
    height: 200px;
    bottom: 10%;
    left: 25%;
  }
}
</style>
