<script setup lang="ts">
import heroImage from '@/assets/images/hero-image.png';

function handleScroll(): void {
  const text1 = document.querySelector('.text-1') as HTMLElement;
  const text2 = document.querySelector('.text-2') as HTMLElement;

  if (window.scrollY > 100) {
    text1.classList.add('scrolled-left');
    text2.classList.add('scrolled-right');
  } else {
    text1.classList.remove('scrolled-left');
    text2.classList.remove('scrolled-right');
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="hero">
    <div class="hero-content crush-container">
      <h1 class="title">
        Optimizamos tus operaciones con chatbots y tus datos.
      </h1>
      <span class="text-1">
        Agencia de
      </span>
      <div class="wrapper">
        <img
        :src="heroImage"
        alt="bakano-hero"
        class="wrapper-image">
      </div>
      <span class="text-2">
        Automatizaciones
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;

    .title {
      max-width: $tablet-upper-breakpoint;
      margin: auto;
      margin-bottom: 16px;
      position: relative;
      font-size: $font-size-large;
      font-family: $primary-font;
      z-index: 20;
    } 

    .text-1, .text-2 {
      transition: transform 0.5s ease-out;
      max-width: calc(100% - 40px);
      white-space: nowrap;
    }

    .scrolled-left {
      transform: translateX(-100px);
    }

    .scrolled-right {
      transform: translateX(100px);
    }

    .wrapper {
      position: relative;
      z-index: 20;
      width: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: $tablet-lower-breakpoint;

      @media(min-width: $tablet-lower-breakpoint) {
        width: 80%;;
      }

      @media(min-width: $desktop-lower-breakpoint) {
        width: 60%;
      }

      &-image {
        width: 100%;
        height: auto;
        min-height: 70vh;
        object-fit: cover;
        animation: fadeInUp 1s ease-out forwards;
      }
    }

    .text-1 {
      position: absolute;
      top: 30%;
      left: 20px;
      z-index: 10;
      font-size: 4rem;
      font-family: $bebas-font;
      color: #33353D00;
      -webkit-text-stroke-width: 2px;
      stroke-width: 2px;
      -webkit-text-stroke-color: $pink;
      stroke: $pink;
      animation: slideInLeft 1s ease-out;
      transition: transform 0.5s ease-out;

      @media(min-width: $tablet-lower-breakpoint) {
        left: 10%;
        font-size: 5rem;
        -webkit-text-stroke-width: 1.5px;
        stroke-width: 1.5px;
      }

      @media(min-width: $desktop-lower-breakpoint) {
        left: 18%;
        font-size: 7rem;
        -webkit-text-stroke-width: 2px;
        stroke-width: 2px;
      }
    }

    .text-2 {
      position: absolute;
      top: 70%;
      right: 20px;
      z-index: 30;
      font-size: 2.25rem;
      font-family: $primary-font;
      color: $pink;
      border-radius: 12px;
      padding: 8px;
      background-color: rgba($color: $white, $alpha: 0.4);
      animation: slideInRight 1s ease-out;
      transition: transform 0.5s ease-out;

      @media(min-width: $tablet-lower-breakpoint) {
        right: 10%;
        font-size: 4rem;
      }

      @media(min-width: $desktop-lower-breakpoint) {
        right: 10%;
        font-size: 5rem;
      }
    }
  }
}

// Animaciones
@keyframes slideInLeft {
  from {
    transform: translateX(-200%);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(200%);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

