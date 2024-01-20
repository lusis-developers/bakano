<script setup>

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
    <div v-if="props.isVisible" class="menu">
      <header class="menu-header">
        <RouterLink  to="/" class="menu-header-logo">
          <img class="logo" src="@/assets/images/bakano-isotipo-negro.png" alt="Bakano">
        </RouterLink>
        <button @click="closeMenu" class="menu-header-closeButton">
          <i class="fa-solid fa-close" />
        </button>
      </header> 
      <div class="menu-buttons">
        <RouterLink 
          v-for="(button, index) in menuItems"
          :key="index" 
          :to="button.link" 
          class="menu-buttons-button">
          {{ button.name }}
        </RouterLink>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.menu {
  padding: 24px;
  width: 100%;
  height: 100vh;
  background-color: $purple;
  color: white;
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 48px;
  &-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-logo {
      width: 80px;
      height: 80px;
      .logo {
        width: 100%;
        height: 100%;
      }
    }
    &-closeButton {
      font-size: 2rem;
      background: none;
      border: none;
      color: $white;
    }
  }
  &-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &-button {
      font-size: 2rem;
      text-decoration: none;
      color: $white;
    }
  }
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
}
</style>