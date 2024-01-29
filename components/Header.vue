<script setup lang="ts">
const props = defineProps({
  IsotipoSrc: {
    type: String,
    required: true
  },
  LogotipoSrc: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
});
</script>

<template>
  <header class="header">
    <NuxtLink to="/">
      <figure class="header-figure">
        <img 
        :src="IsotipoSrc" 
        :alt="brandName" 
        class="header-figure-isotipo" />
        <img 
        :src="LogotipoSrc" 
        :alt="brandName" 
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

    &-isotipo {
      width: 45px;
      height: 45px;
    }

    &-logotipo {
      width: 130px;
    }
  }

}
</style>

