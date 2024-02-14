<script setup lang="ts">
import BakanoIsotipoNegro from '@/assets/images/bakano-isotipo-negro.png';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.png';
</script>

<template>
  <header class="header">
    <NuxtLink>
      <figure class="header-figure">
        <img 
          :src="BakanoIsotipoNegro" 
          alt="Bakano" 
          class="header-figure-isotipo" />
        <img 
          :src="BakanoLogotipoNegro" 
          alt="Bakano"
          class="header-figure-logotipo" />
      </figure>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  max-height: 10vh;
  &-figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 16px;
    &-isotipo {
      width: 48px;
      height: 48px;
    }
    &-logotipo {
      width: 130px;
    }
  }
}
</style>

