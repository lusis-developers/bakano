<script setup>
const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="container">

    <div class="container-first-section">
      <BkHeader @toggle-menu="toggleMenu"/>
      <BkMenu :isVisible="menuOpen" @close-menu="toggleMenu"/>
    </div>
    <div class="container-second-section">
      <Hero/>
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
  }
}
</style>