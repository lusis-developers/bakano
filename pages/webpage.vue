<script setup>
const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);
const headerTransitionEnded = ref(false);
const menuClosed = ref(false);  

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  menuClosed.value = !menuClosed.value;
}
function onHeaderTransitionEnd() {
  headerTransitionEnded.value = true; 
}
</script>

<template>
  <div class="container">

    <div class="container-first-section">
      <BkHeader 
        :menu-closed="menuClosed" 
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
  height: 80vh;
  &-first-section {
    background-color: $black;
  }
  &-second-section {
    width: 100%;
    background-color: $black;
    height: 90vh;
  }
}
</style>