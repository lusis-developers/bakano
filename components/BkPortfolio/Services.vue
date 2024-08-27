<script setup lang="ts">
import useServiceStore from '~/stores/ServiceStore';

const services = useServiceStore();
</script>

<template>
  <div 
    class="container crush-container crush-two-column-layout" 
    :key="index"
    :style="{ '--index': index }"
    v-for="(service, index) in services.services" >
    <figure class="container-video">
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
    height: 350px;
    @media (min-width: $tablet-lower-breakpoint) {
      max-width: 100%;
      max-height: 100%;
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }
}
</style>