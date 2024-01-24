<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const startLogoAnimation = ref(false)

const words = [
  {
    text: "Sapo"
  },
  {
    text: "Chuchaqui"
  },
  {
    text: "Chiro"
  },
  {
    text: "Chévere"
  },
  {
    text: "Chucha"
  },
  {
    text: "Acolitar"
  },
  {
    text: "Farra"
  },
  {
    text: "Mono"
  },
  {
    text: "Yapa"
  },
  {
    text: "Camarón"
  }
];
const half = Math.ceil(words.length / 2);  
const firstHalf = words.splice(0, half);
const secondHalf = words.splice(-half);

onMounted(() => {
  const rightWords = document.querySelectorAll('.container-word');
  const leftWords = document.querySelectorAll('.container-word2');

  gsap.from(rightWords, {
    duration: 1,
    scale: 0,
    ease: 'power3.out',
    stagger: 0.3,
    onComplete: () => {
      startLogoAnimation.value = true;
    }, 
  });
  gsap.to(rightWords, {
    x: '1000%', 
    scrollTrigger: {
      trigger: '.container',
      start: 'top',
      end: 'bottom',
      scrub: true,
    }
  })
  gsap.from(leftWords, {
    duration: 1,
    scale: 0,
    ease: 'power3.out',
    stagger: 0.3,
    onComplete: () => {
      startLogoAnimation.value = true;
    }, 
  });
  gsap.to(leftWords, {
    x: '-1000%', 
    scrollTrigger: {
      trigger: '.container',
      start: 'top',
      end: 'bottom',
      scrub: true,
    }
  })
})
</script>

<template>
  <div class="container">
    <p 
      v-for="word, index) in firstHalf" 
      :key="index"
      class="container-word">
      {{ word.text  }}
    </p>
    <HeroBkLogo :startAnimation="startLogoAnimation"/>
    <p 
      v-for="(word, index) in secondHalf" 
      :key="'second-' + index"
      class="container-word2">
      {{ word.text  }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow-x: hidden;
  padding: 96px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
  &-word, &-word2 {
    color: $white;
    transform-origin: center;
    font-size: 2rem;
    font-family: $primary-font;
  }
}
</style>