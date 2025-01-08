<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const socialIcons = [
  { 
    name: 'instagram', 
    url: 'https://www.instagram.com/bakanoagency/', 
    class: 'fa-brands fa-instagram'
  },
  { 
    name: 'facebook', 
    url: 'https://www.facebook.com/bakanoagency', 
    class: 'fa-brands fa-facebook-f' 
  },
  { 
    name: 'linkeding',
    url: 'https://www.linkedin.com/company/bakano-agency/',
    class: 'fa-brands fa-linkedin-in' 
  },
  { 
    name: 'tiktok',
    url: 'https://www.tiktok.com/@bakano.agency?_t=8jfKHtOoJxW&_r=1', 
    class: 'fa-brands fa-tiktok social-img-tiktok' 
  },
]

function subscribeUser () {
  console.log('Usuario suscrito:', email.value)
  email.value = ''
}
</script>

<template>
  <div class="container flex-container">
    <div class="container-content-wrapper">
      <h1 class="container-content-wrapper-main-title animate-fade-in">
        Estamos creando algo
        <span class="container-content-wrapper-highlight">nuevo</span> para ti
      </h1>
      
      <p class="container-content-wrapper-subtitle animate-fade-in-delay">
        Prepárate para potenciar la forma en que trabajas.
      </p>

      <div class="container-content-wrapper-building-animation">
        <div class="building-bar"></div>
        <div class="building-bar"></div>
        <div class="building-bar"></div>
      </div>
      
      <div class="social-links">
        <NuxtLink 
          v-for="icon in socialIcons" 
          :key="icon.name" 
          :to="icon.url" 
          target="_blank"
          external
          :aria-label="'Red social de bakano:' + icon.name">
          <i 
            :class="icon.class"
            class="social-links-social-icon" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: $black;

  &-content-wrapper {
    max-width: 42rem;
    width: 100%;
    text-align: center;
    
    &-main-title, &-highlight {
      font-size: 2.25rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      font-family: $primary-font;
      color: $white;
    }
    
    &-highlight {
      color: $pink;
    }

    &-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: $white;
    }

    &-building-animation {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin: 2rem 0;

      .building-bar {
        width: 0.5rem;
        height: 1.5rem;
        background: linear-gradient(to top, $pink, $purple);
        border-radius: 4px;
        animation: bounce 1.5s infinite ease-in-out;
      }

      /* Animación escalonada para cada barra */
      .building-bar:nth-child(1) {
        animation-delay: 0s;
      }

      .building-bar:nth-child(2) {
        animation-delay: 0.2s;
      }

      .building-bar:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  &-social-icon {
    color: $white;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s forwards;
  opacity: 0;
}




/* Animación de "rebote" */
@keyframes bounce {
  0%, 100% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1);
  }
}
</style>
