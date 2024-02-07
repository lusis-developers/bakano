<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { clients } from '@/utils/Clients'

gsap.registerPlugin(ScrollTrigger);

let containerClients = ref(null);

onMounted(() => {
  const isMobile = window.innerWidth <= 768;

  gsap.from(containerClients.value.children, {
    scrollTrigger: {
      trigger: containerClients.value,
      start: () => isMobile ? "top top" : "center bottom", 
      end: () => "+=" + containerClients.value.clientHeight,
      scrub: true,
      markers: true,
    },
    duration: 1,
    y: '100vh',
    x: '-100vw',
    stagger: 0.5,
    ease: 'power1.out',
  });
});
</script>

<template>
  <div class="container">
    <h3 class="container-title">
      Más que panas
    </h3>
    <div class="container-clients" ref="containerClients">
      <BkClientsBkClient 
        v-for="(client, index) in clients"
        :key="index" 
        :name="client.name" 
        :src="client.src"
        :logo="client.logo"
        :backgroundColor="client.backgroundColor"
        :clientUrl="client.clientUrl"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 24px;
    background-color: $black;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    &-title {
      color: $white;
      font-family: $primary-font;
      font-size: 3rem;
    }
    &-clients {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
    }
    .filosofia {
      height: 100vh;
      width: 100%;
      background-color: $white;
    }
  }
</style>