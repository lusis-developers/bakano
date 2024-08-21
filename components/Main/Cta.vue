<script setup lang="ts">
import agencyImage from '@/assets/Cta/agencia.jpg'
</script>

<template>
  <div class="card">
    <h2 class="card-title">
      Impulsa tu empresa y mejora tus servicios con Chatbots Inteligentes
    </h2>
    <h3 class="card-subtitle">
      Creamos conversaciones personalizadas, atractivas e inteligentes, para mejorar la experiencia de tu cliente, potenciando la conversión y preferencia.
    </h3>
    <GlobalBkButton/>
  </div>
</template>

<style lang="scss">
.card {
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url('agencyImage');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &-title {
    font-family: $primary-font;
    text-align: center;
  }
  &-subtitle {
    font-family: $primary-font;
    text-align: center;
    font-weight: normal;
  }
}
</style>