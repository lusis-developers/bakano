<script setup lang="ts">
import blackLogo from '@/assets/images/bakano-logotipo-negro.webp'

import { menuItems } from '@/utils/menuItems';

const emits = defineEmits(['toggle-menu']);

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  emits('toggle-menu');
}
</script>

<template>
  <header class="header">
    <RouterLink
      to="/"
      class="header-figure">
        <img
          :src="blackLogo"
          alt="Bakano logotipo"
          class="header-figure-logo">
    </RouterLink>
    <button
			class="header-button"
      aria-label="Menú"
			@click="toggleMenu">
			  <i class="fa-solid fa-bars" />
		</button>
    <div class="header-details">
			<RouterLink
        v-for="(button, index) in menuItems"
        :key="index"
        :to="button.link"
        class="header-details-button">
          {{ button.name }}
			</RouterLink>
		</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 12px 24px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 2048px;
  margin: 0 auto;
  &-figure {
    &-logo {
      width: 120px;
    }
  }
  &-button {
    background: none;
    border: none;
    text-decoration: none;
    font-size: $font-size-normal;
    @media (min-width: 700px) {
      display: none;
    }
  }
  &-details{
    display: none;
    @media (min-width: 700px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $black;
      gap: 12px;
		}
    &-button {
      border: none;
      color: $black;
      font-family: $primary-font;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        border: none;
        font-weight: 700;
      }
    }
  }
}
</style>