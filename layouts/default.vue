<script setup lang="ts">
import BkMenu from '@/components/BkMenu.vue';
import BkHeader from '@/components/BkHeader.vue';
import BkFooter from '@/components/BkFooter.vue';

const isMenuOpen = ref(false);

function openCloseMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div>
    <!-- <BkHeader @toggle-menu="openCloseMenu" /> -->
    <slot />
    <!-- <BkFooter /> -->
    <!-- <BkMenu
      :isVisible="isMenuOpen"
      @closeMenu="openCloseMenu" /> -->
  </div>
</template>
