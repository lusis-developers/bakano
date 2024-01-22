<script setup>
const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);
const headerTransitionEnded = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function onHeaderTransitionEnd() {
  headerTransitionEnded.value = true; 
}
</script>

<template>
  <div class="container">

    <div class="container-first-section">
      <BkHeader 
        @toggle-menu="toggleMenu"  
        @header-transition-end="onHeaderTransitionEnd"/>
      <BkMenu :isVisible="menuOpen" @close-menu="toggleMenu"/>
    </div>
    <div class="container-second-section">
      <Hero v-if="headerTransitionEnded"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  &-first-section {
    background-color: $black;
  }
  &-second-section {
    width: 100%;
    background-color: $black;
    width: 100%;
    height: 100vh;
  }
}
</style>