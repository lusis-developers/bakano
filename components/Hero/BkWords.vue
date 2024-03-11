<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const startLogoAnimation = ref(false)
const words = [
  {
    text: "Encebollado"
  },
  {
    text: "Pana"
  },
  {
    text: "Posi"
  },
  {
    text: "Broder"
  },
  {
    text: "Chiripa"
  },
  {
    text: "Camello"
  },
  {
    text: "Tripea"
  },
  {
    text: "Lámpara"
  },
  {
    text: "Tigrillo"
  },
  {
    text: "Panas"
  }
];
const half = Math.ceil(words.length / 2);  
const firstHalf = words.splice(0, half);
const secondHalf = words.splice(-half);
const colors = ['#1AFFFB', '#F46DFE', '#B3FE6D', '#FFB04F', '#3F9BFF'];

function getColor (index)  {
  return colors[index];
};

onMounted(() => {
  const firstContainerWords = document.querySelectorAll('.container-word');
  const secondContainerWords = document.querySelectorAll('.container-word2');

  gsap.from(firstContainerWords, {
    duration: 1,
    scale: 0,
    ease: 'power3.out',
    stagger: 0.3,
    onComplete: () => {
      startLogoAnimation.value = true;
    }, 
  });

  gsap.to(firstContainerWords, {
    x: '1000%', 
    scrollTrigger: {
      trigger: '.container',
      start: 'top',
      end: 'bottom',
      scrub: true,
    }
  })

  gsap.from(secondContainerWords, {
    duration: 1,
    scale: 0,
    ease: 'power3.out',
    stagger: 0.3,
    onComplete: () => {
      startLogoAnimation.value = true;
    }, 
  });

  gsap.to(secondContainerWords, {
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
      :class="`container-word container-word-${index}`"
      :style="{ '--hover-color': getColor(index) }">
      {{ word.text  }}
    </p>
    <HeroBkLogo :startAnimation="startLogoAnimation"/>
    <p 
      v-for="(word, index) in secondHalf" 
      :key="index"
      :class="`container-word2 container-word2-${index}`"
      :style="{ '--hover-color': getColor(index) }">
      {{ word.text  }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1440px;
  overflow-x: hidden;
  padding: 50px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 96px 24px;
  }
  &-word, &-word2 {
    color: $white;
    transform-origin: center;
    font-size: $font-size-large;
    font-family: $primary-font;
    font-weight: bold;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: 2rem;
    }
    &:hover {
      color: var(--hover-color);
      transition: color 0.3s ease-in-out;
    }
    @media (min-width: 800px) {
      &-0 {
        transform: translateY(-50%) rotate(-60deg);
      }
      &-1 {
        transform: translateY(-50%) rotate(-30deg);
      }
      &-2 {
        transform: translateY(-50%) rotate(0deg);
      }
      &-3 {
        transform: translateY(-50%) rotate(30deg);
      }
      &-4 {
        transform: translateY(-50%) rotate(60deg);
      }
    }
   }
}
</style>