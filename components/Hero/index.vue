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
      <HeroBkWords />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: $black;
  width: 100%;
}
</style>