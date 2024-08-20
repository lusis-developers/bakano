<script setup lang="ts">
import heroImage from '@/assets/images/hero-image.png';
</script>

<template>
  <div class="hero">
    <div class="hero-content crush-container">
      <h1 class="title">
        ¡Hola! Bienvenido a Bakano. Ayudamos a tu empresa a adoptar tecnologías en tus procesos.
      </h1>
      <span class="text-1">
        Chatbots
      </span>
      <div class="wrapper">
        <img
        :src="heroImage"
        alt="bakano-hero"
        class="wrapper-image">
      </div>
      <span class="text-2">
        Inteligentes
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  padding-top: 24px;
  background-image: url('~/assets/images/3433814.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &-content {
    position: relative;

    .title {
      margin-bottom: 16px;
      max-width: 320px;
      margin: auto;
      font-size: $font-size-large;
    }

    .text-1 {
      position: absolute;
      top: 50%;
      left: 20px;
      z-index: 10;
      font-size: 4rem;
      font-family: $bebas-font;
      color: #33353D00;
      -webkit-text-stroke-width: 2px;
      stroke-width: 2px;
      -webkit-text-stroke-color: $pink;
      stroke: $pink;

      @media(min-width: $tablet-lower-breakpoint) {
        left: 20%;
        font-size: 5rem; // Aumenta el tamaño en pantallas más grandes
        -webkit-text-stroke-width: 1.5px; // Ajusta el tamaño del borde
        stroke-width: 1.5px;
      }

      // Media query para pantallas grandes (desktops, etc.)
      @media(min-width: $desktop-lower-breakpoint) {
        left: 10%;
        font-size: 7rem; // Tamaño original para pantallas grandes
        -webkit-text-stroke-width: 2px; // Tamaño del borde original
        stroke-width: 2px;
      }
    }

    .wrapper {
      position: relative;
      z-index: 20;
      width: 100%;
      max-width: 420px;
      margin: auto;
      height: 300px;

      &-image {
        width: 100%;
      }
    }

    .text-2 {
      position: absolute;
      top: 70%;
      right: 10px;
      z-index: 30;
      font-size: 4rem;
      font-family: $primary-font;
      color: $pink;

      @media(min-width: $tablet-lower-breakpoint) {
        right: 20%;
        font-size: 5rem;
      }

      @media(min-width: $desktop-lower-breakpoint) {
        right: 10%;
        font-size: 7rem;
      }
    }
  }
}
</style>