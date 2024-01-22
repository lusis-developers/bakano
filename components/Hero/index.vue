<script setup>
import gsap from 'gsap'
</script>

<template>
  <div class="container">
    <div class="container-words">
      <BkWord />
      <HeroBkLogo />
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