<script setup>
import { gsap } from 'gsap';

import whiteLogo from '../assets/images/bakan-isotipo-blanco.png'
import blackLogo from '../assets/images/bakano-isotipo-negro.png'

const emits = defineEmits(['toggle-menu', 'header-transition-end']);

const props = defineProps({
  colorLogo: {
    type: Boolean,
    required: false,
    default: false,
  }  
});

const menuOpen = ref(false);
const logo = computed(() => props.colorLogo ? blackLogo : whiteLogo)

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  emits('toggle-menu');
}

onMounted(() => {
  const logo = document.querySelector('.header-figure-logo');
  const menuButton = document.querySelector('.header-button');
  const menuButtons = document.querySelectorAll('.header-details-button');
  const logoPositionX = (window.innerWidth / 2) - (document.querySelector('.header-figure-logo').clientWidth / 2);
  const logoPositionY = (window.innerHeight / 2) - (document.querySelector('.header-figure-logo').clientHeight / 2)

  const timeline = gsap.timeline({
    onComplete: () => {
      emits('header-transition-end');
    }
  })

  timeline.fromTo(logo, {
    scale: 0,
    duration: 2,
    ease: 'power3.inOut'
  }, {
    scale: 1,
    duration: 2,
    ease: 'power3.inOut'
  });
  timeline.fromTo(logo, {
    x: `${logoPositionX}px`,
    y: `${logoPositionY}px`,
    duration: 1.5,
    ease: 'power3.out'
  }, {
    x: '0',
    y: '0',
    duration: 2,
    ease: 'power3.out'
  });
  timeline.to(menuButton, {
    duration: 0.5,
    opacity: 1,
    ease: 'power2.inOut'
  });
  menuButtons.forEach((button, index) => {
    timeline.to(button, {
      duration: 0.5,
      opacity: 1,
      ease: 'power2.out'
    });
  });
})
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header-figure">
      <img
        :src="logo"
        alt="Bakano logotipo"
        class="header-figure-logo">
    </RouterLink>
    <button
			class="header-button"
			@click="toggleMenu">
			<i class="fa-solid fa-bars" />
		</button>
    <div class="header-details">
			<router-link 
        v-for="(button, index) in menuItems"
        :key="index" 
        :to="button.link" 
        class="header-details-button">
        {{ button.name }} 
			</router-link>
		</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 12px 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 2048px;
  margin: 0 auto;
  &-figure {
    z-index: 5;
    &-logo {
      width: 80px;
      height: 80px;
      z-index: 5;
    }
  }
  &-button {
    background: none;
    border: none;
    text-decoration: none;
    color: $white;
    font-size: 1rem;
    opacity: 0;
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
      font-family: $primary-font;
      font-weight: 700;
      color: $white;
      text-decoration: none;
      opacity: 0;
      &:hover {
        border: none;
        font-weight: 700;
      }
    }
  }
}
</style>