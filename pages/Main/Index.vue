<script setup lang="ts">
import Hero from '@/components/Main/Hero.vue';
import Results from '@/components/Main/Results.vue';
import Experience from '@/components/Main/Experience.vue';
</script>

<template>
  <div class="main">
    <Hero />
    <Results />
    <Experience />
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
}
</style>
