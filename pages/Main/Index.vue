<script setup lang="ts">
import Hero from '@/components/Main/Hero.vue';
</script>

<template>
  <div class="main">
    <Hero />
    <div class="prueba"></div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  .prueba {
    height: 2000px;
  }
}
</style>
