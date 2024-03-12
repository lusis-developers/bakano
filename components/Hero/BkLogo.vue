<script setup>
import gsap from 'gsap'
import Typed from 'typed.js'

const props = defineProps({
  startAnimation: {
    type: Boolean,
    required: false,
    default: false,
  }
})

const logo = ref(null);
const phrase = ref(null);

watch(() => props.startAnimation, (newVal) => {
  if (newVal) {
    logo.value.style.visibility = 'visible'
    gsap.from(logo.value, {
      duration: 1.5,
      y: '-100vh',
      ease: 'bounce.out',
      onComplete: () => {
        new Typed(phrase.value, {
          strings: ['Agencia digital'],
          typeSpeed: 50,
          startDelay: 0,
          showCursor: false,
        })
      }
    })
  }
})

onMounted(() => {
  logo.value = document.querySelector('.container-figure-image')
  phrase.value = document.querySelector('.container-figure-phrase')
})
</script>

<template>
  <div class="container">
    <figure class="container-figure">
      <img 
        src="/assets/images/bakano-logotipo-blanco.webp" 
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
      visibility: hidden;
    }
    &-phrase {
      color: $white;
      font-family: $primary-font;
      font-size: $font-size-normal; 
      @media (min-width: $tablet-upper-breakpoint) {
        font-size: 2rem;
      }
      transition: color 0.5s;
      cursor: default;
      &:hover {
        color: $pink;;
      }
    }
  }
}
</style>