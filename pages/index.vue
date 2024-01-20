<script setup>
const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="first-section">
    <BkHeader @toggle-menu="toggleMenu"/>
    <BkMenu :isVisible="menuOpen" @close-menu="toggleMenu"/>
    <!-- <BkHero/> -->
  </div>
</template>

<style lang="scss" scoped>
.first-section {
  background-color: $black;
  height: 100vh;
}
</style>