<script setup lang="ts">
import { menuLandingItems } from '~/utils/menuLandingItems';

const emit = defineEmits(['close-menu']);

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: false,
    default: false,
  }
});

function closeMenu() {
  emit('close-menu');
}
</script>

<template>
  <transition name="slide-down">
    <div 
      v-if="props.isVisible" 
      class="menu">
        <header class="menu-header">
          <button
            class="menu-header-closeButton"
            @click="closeMenu">
              <i class="fa-solid fa-close" />
          </button>
        </header> 
        <div class="menu-buttons">
          <NuxtLink 
            v-for="(button, index) in menuLandingItems"
            :key="index"
            :to="button.link"
            class="menu-buttons-button links"
            @click="closeMenu">
              {{ button.name }}
          </NuxtLink>
        </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.menu {
  padding: 24px;
  width: 100%;
  height: 100vh;
  background-color: $pink;
  color: white;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
  z-index: 100;
  &-header {
    width: 100%;
    display: flex;
    justify-content: right;
    padding: 12px 0;
    position: sticky;
    &-closeButton {
      font-size: 2rem;
      background: none;
      border: none;
      color: $black;
    }
  }
  &-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 16px;
    &-button {
      font-size: 2rem;
      text-decoration: none;
      color: $black;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
}
</style>