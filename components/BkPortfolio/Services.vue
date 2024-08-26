<script setup lang="ts">
import useServiceStore from '~/stores/ServiceStore';

const services = useServiceStore();
</script>

<template>
  <div class="container crush-container crush-two-column-layout" v-for="(service, index) in services.services" :key="index">
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
        :details="service.details" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  &-video {
    width: 100%;
    height: 600px;
    @media (min-width: $tablet-lower-breakpoint) {
      max-width: 600px;
      max-height: 600px;
    }
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  &-content {
    max-width: 500px;
  }
}
</style>