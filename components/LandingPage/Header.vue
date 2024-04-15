<script setup lang="ts">
import { menuLandingItems } from '~/utils/menuLandingItems';
import whiteLogo from '../assets/images/bakan-isotipo-blanco.webp'
import blackLogo from '../assets/images/bakano-isotipo-negro.webp'

const emits = defineEmits(['toggle-menu']);

const props = defineProps({
  colorLogo: {
    type: Boolean,
    required: false,
    default: false,
  }  
});

const menuOpen = ref(false);
const logo = computed(() => props.colorLogo ? blackLogo : whiteLogo)

function toggleMenu():void {
  menuOpen.value = !menuOpen.value;
  emits('toggle-menu');
}
</script>

<template>
  <header class="header">
    <NuxtLink 
      to="/" 
      class="header-figure">
        <img
          :src="logo"
          width="48"
          height="48"
          alt="Bakano logotipo"
          class="header-figure-logo">
    </NuxtLink>
    <button
			class="header-button"
      aria-label="Menú"
      role="menu"
			@click="toggleMenu">
			  <i class="fa-solid fa-bars" />
		</button>
    <div class="header-details">
			<NuxtLink
        v-for="(button, index) in menuLandingItems"
        :key="index" 
        :to="button.link"
        class="header-details-button">
          {{ button.name }} 
			</NuxtLink>
		</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 12px 40px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 10vh;
  margin: 0 auto;
  &-figure {
    z-index: 110;
    &-logo {
      max-width: 48px;
      aspect-ratio: 1/1;
    }
  }
  &-button {
    background: none;
    border: none;
    text-decoration: none;
    color: $white;
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
      gap: 16px;
		}
    &-button {
      border: none;
      font-family: $primary-font;
      font-weight: 700;
      color: $white;
      text-decoration: none;
      position: relative;
      @media (min-width: $tablet-upper-breakpoint) {
        font-size: 1.1rem;
      }
    }
  }
}
.header-details-button::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2.25px;
  background-color: #fff;
  transition: width 0.5s ease-in-out;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}
.header-details-button:hover::after{
  width: 100%;
}
</style>