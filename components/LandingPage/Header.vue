<script setup lang="ts">
import BakanoIsotipoNegro from '@/assets/images/bakano-isotipo-negro.webp';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.webp';
</script>

<template>
  <header class="header">
    <div>
      <a class="header-figure" href="/">
        <img 
          :src="BakanoIsotipoNegro" 
          alt="Bakano" 
          class="header-figure-isotipo" />
        <img 
          :src="BakanoLogotipoNegro" 
          alt="Bakano"
          class="header-figure-logotipo" />
      </a>
    </div>
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

