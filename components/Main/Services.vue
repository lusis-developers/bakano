<script setup lang="ts">
const services = [
  {
    title: 'Marketing digital',
    paragraph: 'super descripcion'
  }, 
  {
    title: 'E-commerce',
    paragraph: 'super descripcion',
  },
  {
    title: 'Analisis de datos',
    paragraph: 'super descripcion',
  }
]
</script>

<template>
  <div class="container-cards">
    <div class="container-cards-principal">
      <div 
        class="container-cards-principal-card"
        v-for="(service, index) in services"
        :key="index">
        <i class="icon fa-solid fa-chart-simple"></i>
        <p class="container-cards-principal-card-title">
          {{service.title}}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-cards {
  width: 100%;
  max-width: $desktop-lower-breakpoint;
  &-principal {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    &-card {
      width: 100%;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (min-width: $tablet-upper-breakpoint) {
        max-width: 40%;
      }
      &-title {
        color: $black;
        font-size: $font-size-large;
        font-family: $primary-font;
      }
      &-subtitle {
        color: $black;
        font-size: $font-size-normal;
        font-family: $primary-font;
      }
      .icon {
        font-size: $font-size-large;
      }
    }
  }
}
</style>