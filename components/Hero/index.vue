<script setup>
import gsap from 'gsap';

const bkWordFinished = ref(false);

function  handleAnimationFinished () {
  bkWordFinished.value = true;
}
</script>

<template>
  <div class="container">
    <div class="container-words">
      <BkWord @animationFinished="handleAnimationFinished" />
      <HeroBkLogo v-if="bkWordFinished" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: $black;
  display: flex;
  &-words {
    width: 100%;
  }
}
</style>