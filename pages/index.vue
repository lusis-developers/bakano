<script setup lang="ts">
import Cta from '@/components/Main/Cta.vue';
import Hero from '@/components/Main/Hero.vue';
import Results from '@/components/Main/Results.vue';
import Services from '@/components/Main/Services.vue';
import Experience from '@/components/Main/Experience.vue';
import CustomerTarget from '~/components/Main/CustomerTarget.vue';
import BuildInProgress from '~/components/UnderConstruction/index.vue'
</script>

<template>
  <div class="main">
    <!-- <Hero />
    <Results />
    <CustomerTarget />
    <Experience />
    <Cta />
    <Services /> -->
    <BuildInProgress/>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
}
</style>
