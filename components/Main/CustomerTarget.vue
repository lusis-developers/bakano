<script setup lang="ts">
const icons = [
  'fa-brands fa-square-js',
  'fa-solid fa-cloud-arrow-up',
  'fa-brands fa-python',
  'fa-solid fa-bullhorn',
  'Automotriz',
  'Coaching'
];
const customers = ['Bancos', 'Aseguradoras', 'E-commerce', 'Salud', 'Automotriz', 'Coaching'];
</script>

<template>
  <div class="customer">
    <div class="customer-target crush-container">
      <div class="customer-target-left">
        <h2 class="customer-target-left-title">
          Aumenta los resultados de tu empresa con nuestras soluciones digitales.
        </h2>
        <h3 class="customer-target-left-subtitle">
          Ahora puedes potenciar los resultados de tu negocio de acuerdo con tu industria y mejorar tu eficiencia.
        </h3>
        <div class="customer-target-left-icons">
          <i
            v-for="icon in icons"
            :key="icon"
            :class="icon"
            class="icon" />
        </div>
      </div>
      <div class="customer-target-right">
        <ul class="items">
          <li
            v-for="customer in customers"
            :key="customer"
            class="items-item">
            {{ customer }}
            <div class="items-line" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer {
  width: 100%;
  padding: 24px 16px;
  background-color: $grey;
  @media(min-width: $desktop-lower-breakpoint) {
    padding: 96px 0 48px 0;
  }

  &-target {
    min-width: $mobile-lower-breakpoint;
    max-width: $desktop-upper-breakpoint;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &-left {
      width: 100%;
      display: grid;
      place-items: center;
      gap: 24px;
      font-family: $primary-font;
      
      @media(min-width: $desktop-lower-breakpoint) {
        padding: 24px;
        width: 50%;
      }

      &-icons {
        width: 100%;
        display: flex;
        gap: 16px;
        justify-content: center;
        @media(min-width: $desktop-lower-breakpoint) {
          justify-content: flex-start;
        } 
        
        .icon {
          font-size: 56px;
          color: #33353D00;
          -webkit-text-stroke-width: 2px;
          stroke-width: 2px;
          -webkit-text-stroke-color: $pink;
          stroke: $pink;
        }
      }
    }
    
    &-right {
      width: 100%;
      padding: 24px 0;
      display: grid;
      place-items: center;
      @media(min-width: $desktop-lower-breakpoint) {
        width: 50%;
      }

      .items {
        width: 100%;
        list-style-type: none;
        font-family: $primary-font;
        display: flex;
        flex-direction: column;
        gap: 12px;

        &-line {
          width: 100%;
          height: 8px;
          background-color: $pink;
          border-radius: 4px;

          @media(min-width: $desktop-lower-breakpoint) {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>