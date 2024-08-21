<script setup lang="ts">
const items: { title: string }[] = [
  {
    title: 'Recepción de pagos por tarjeta o transferencias',
  },
  {
    title: 'Lectura de ubicación por GPS'
  },
  {
    title: 'Chat conversacional'
  },
  {
    title: 'Agendamiento de citas'
  },
  {
    title: 'Almacenamiento en Base de datos'
  },
];
</script>

<template>
  <div class="container">
    <div class="container-principal">
      <p class="container-principal-title">
      Features
    </p>
    <div class="container-principal-details">
      <h2 class="container-principal-details-title">
        Tu negocio es único y tus operaciones lo saben
      </h2>
      <h3 class="container-principal-details-subtitle">
        Nuestros servicios están pensados para que ahorres tus recursos mientras maximizar tus resultados. Y nuestro equipo está listo para ayudarte.
      </h3>
      <GlobalBkButton
        button-text="Hablar con ventas"/>
    </div>
    <div class="container-principal-details-second">
      <p 
        v-for="(item, index) in items"
        :key="index"
        class="container-principal-details-second-item">
        {{ item.title }}
      </p>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  background-color: $white;
  &-principal {
    max-width: $desktop-lower-breakpoint;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 16px;
    &-title {
      width: 100%;
      color: rgb(253, 196, 196);
      font-size: $font-size-extra-large;
      text-align: right;
      @media(min-width: $tablet-upper-breakpoint) {
        font-size: 80px;
      }
    }
    &-details {
      padding: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      @media (min-width: $tablet-upper-breakpoint) {
        width: 40%;
      }
      &-title {
        color: $black;
        font-family: $primary-font;
      }
      &-subtitle {
        color: $black;
        font-family: $primary-font;
        font-weight: 400;
      }
    }
    &-details-second {
      width: 100%;
      display: flex;
      padding: 16px;
      flex-direction: column;
      justify-content: space-between;
      @media (min-width: $tablet-upper-breakpoint) {
        width: 40%;
      }
      &-item {
        color: $black;
        font-family: $primary-font;
        border-bottom: 1px solid $black;
        padding: 16px;
        font-size: $font-size-normal;
      }
    }
  }
}
</style>