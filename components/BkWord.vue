<script setup>
import gsap from 'gsap'

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

onMounted(() => {
  const words = document.querySelectorAll('.container-word');

  gsap.from(words, {
    duration: 2,
    scale: 0,
    ease: 'power3.out',
    stagger: 0.5
  })
})

</script>

<template>
  <div class="container">
    <p 
      v-for="word, index) in words" 
      :key="index"
      class="container-word">
      {{ word.text  }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
  &-word {
    color: $white;
    transform-origin: center;
    font-size: 2rem;
    font-family: $primary-font;
  }
}
</style>