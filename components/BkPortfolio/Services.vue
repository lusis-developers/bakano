<script setup lang="ts">
import useServiceStore from '~/stores/ServiceStore';

const services = useServiceStore();
</script>

<template>
  <div 
    class="container" 
    :key="index"
    :style="{ '--index': index }"
    v-for="(service, index) in services.services" >
    <figure class="container-video">
        <a
          :href="service.videoDemo"
          target="_blank" 
          class="container-video-message">
          Ver demo
          <i class="fa-solid fa-link"/>
        </a>
      <img 
        :src="service.projectImage" 
        alt="primer servicio"
        class="container-video-img" >
    </figure>
    <div class="container-content">
      <BkPortfolioServiceCard
        :projectType="service.projectType"
        :projectTitle="service.projectTitle"
        :projectDescription="service.projectDescription"
        :projectSubTitle="service.projectSubTitle"
        :details="service.details" 
        :socialMedia="service.socialMedia"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-direction: column;
  opacity: 0;
  animation: fadeInUp 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index));
  @media (min-width: $tablet-lower-breakpoint) {
    flex-direction: row;
  }
  &:nth-child(odd) {
    // flex-direction: column-reverse;
    @media (min-width: $tablet-lower-breakpoint) {
      flex-direction: row-reverse;
    }
  }
  &-video {
    width: 100%;
    height: 400px;
    position: relative;
    @media (min-width: $tablet-lower-breakpoint) {
      max-width: 100%;
      height: 400px;
    }
    &-message {
      all: unset;
      padding: 16px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      font-family: $primary-font;
      color: $pink;
      font-weight: bold;
      backdrop-filter: blur(6px);
      border-radius: 8px;
      z-index: 2;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
  }
}
</style>