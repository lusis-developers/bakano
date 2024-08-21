<script setup lang="ts">
const services = [
  {
    title: 'Marketing digital',
    paragraph: 'Impulsa tu marca al siguiente nivel con estrategias de marketing digital efectivas. Atrae clientes, aumenta ventas y destaca en un mundo digital competitivo. ¡Transforma tu negocio hoy!'
  }, 
  {
    title: 'E-commerce',
    paragraph: 'Conquista el mercado online con nuestra solución de e-commerce. Vende más, optimiza tu tienda y mejora la experiencia de tus clientes. ¡Lleva tu negocio al éxito digital!',
  },
  {
    title: 'Analisis de datos',
    paragraph: 'Descubre insights poderosos con nuestro análisis de datos. Toma decisiones informadas, optimiza procesos y acelera el crecimiento de tu negocio. ¡Convierte datos en éxito!',
  }
]
</script>

<template>
  <div class="container-cards">
    <div class="container-cards-principal">
      <h2 class="container-cards-principal-title">
        Conoce nuestros servicios complementarios
      </h2>
      <div 
        class="container-cards-principal-card"
        v-for="(service, index) in services"
        :key="index">
        <i class="icon fa-solid fa-chart-simple"></i>
        <p class="container-cards-principal-card-title">
          {{service.title}}
        </p>
        <p class="container-cards-principal-card-subtitle">
          {{service.paragraph}}
        </p> 
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-cards {
  padding-top: 48px;
  width: 100%;
  background-color: $white;
  &-principal {
    max-width: $desktop-lower-breakpoint;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 24px;
    &-title {
      width: 100%;
      text-align: center;
      font-size: $font-size-large;
      font-family: $primary-font;
      @media (min-width: $tablet-upper-breakpoint) {
        font-size: $font-size-extra-large;
      }
    }
    &-card {
      background-color: $black;
      width: 100%;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      border-radius: 8px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 8px;
          background-color: $pink;
          border-radius: 0 0 8px 8px;
          opacity: 0.8;
        }
      }
      @media (min-width: $tablet-upper-breakpoint) {
        max-width: 40%;
      }
      &-title {
        color: $white;
        font-size: $font-size-large;
        font-family: $primary-font;
      }
      &-subtitle {
        color: $white;
        padding: 16px;
        font-size: $font-size-normal;
        font-family: $primary-font;
        border-radius: 8px;
      }
      .icon {
        font-size: $font-size-large;
        color: $white;
      }
    }
  }
}
</style>