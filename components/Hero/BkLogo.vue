<script setup>
import gsap from 'gsap'
import Typed from 'typed.js'

onMounted(() => {
  const logo = document.querySelector('.container-figure-image');
  const phrase = document.querySelector('.container-figure-phrase');

  gsap.from(logo, {
    duration: 2,
    y: '-100vh',
    ease: 'bounce.out',
    onComplete: () => {
      new Typed(phrase, {
        strings: ['Agencia digital'],
        typeSpeed: 50,
        startDelay: 0,
      })
    }
  })
})
</script>

<template>
  <div class="container">
    <figure class="container-figure">
      <img 
        src="/assets/images/bakano-logotipo-blanco.png" 
        alt="Bakano" 
        class="container-figure-image">
      <p class="container-figure-phrase" ref="phrase">
        
      </p>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-figure {
    width: 100%;
    max-width: 800px;
    &-image {
      width: 100%;
    }
    &-phrase {
      color: $white;
      font-family: $primary-font;
      font-size: 2rem; 
      transition: color 0.5s;
      cursor: default;
      &:hover {
        color: $pink;;
      }
    }
  }
}
</style>