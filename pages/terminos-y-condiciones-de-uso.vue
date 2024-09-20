<script setup lang="ts">
const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);

function toggleMenu():void {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div>
    <LandingPageMenu 
      :isVisible="menuOpen" 
      @close-menu="toggleMenu" />
    <div class="privacy-container">
      <h1 class="privacy-container-title">
        Términos y Condiciones de Uso
      </h1>
      <BkTerms />
    </div>
  </div>
</template>

<style lang="scss"scoped>
:deep(.header) {
  background-color: $black;
}
.privacy-container{
  padding: 20px;
  @media (min-width: $tablet-upper-breakpoint) {
    max-width: 80vw;
    margin: 0 auto;    
  }
  &-title{
    font-family: $primary-font;
    font-size: 2.5rem;
    margin: 40px 0;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: 3rem;
      text-align: center;
    }
  }
}
</style>