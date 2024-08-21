<script setup lang="ts">
const featuresTitle = ref<HTMLElement | null>(null);

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const element = featuresTitle.value;
    if(element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      if(scrollPosition > elementPosition) {
        element.style.transform = 'translateX(0)';
        element.style.opacity = '1';
      } else {
        element.style.transform = 'translateX(100%)';
        element.style.transform = '0';
      };
    };
  };
})
</script>

<template>
  <div class="container">
    <div class="container-principal">
      <p
        ref="featuresTitle" 
        class="container-principal-title">
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
      color: $pink;
      font-family: $primary-font;
      font-size: $font-size-extra-large;
      text-align: right;
      opacity: 0;
      transition: transform 2s ease-out, opacity 2s ease-out;
      @media(min-width: $tablet-upper-breakpoint) {
        font-size: 200px;
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