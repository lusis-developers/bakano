<script setup lang="ts">
import BakanoIsotipoBlanco from '@/assets/images/bakan-isotipo-blanco.webp'
</script>

<template>
  <header class="header">
    <div>
      <a class="header-figure" href="/">
        <img 
          :src="BakanoIsotipoBlanco" 
          alt="Bakano" 
          class="header-figure-isotipo" />
      </a>
    </div>
    <div class="links">
      <NuxtLink 
        to="/chatbot" 
        class="link">
          Chatbot
      </NuxtLink>
      <NuxtLink 
        to="/marketing_services" 
        class="link">
          Marketing
      </NuxtLink>
      <NuxtLink 
        to="/blogs" 
        class="link">
          Blogs
      </NuxtLink>
      <NuxtLink 
        to="/" 
        class="link">
          Inicio
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 12px 40px;
  max-height: 10vh;
  @media (min-width: $tablet-upper-breakpoint) {
    justify-content: space-between;    
  }
  &-figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 16px;
    &-isotipo {
      width: 48px;
      height: 48px;
    }
    &-logotipo {
      width: 130px;
    }
  }
}
.links{
  display: none;
  @media (min-width: $tablet-upper-breakpoint){
    display: block;
  }
}
.link{
  font-family: $primary-font;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  position: relative;
  margin: 0 16px;
  padding-bottom: 5px;
}
.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%; 
  height: 2px;
  background-color: #fff;
  transition: width 0.3s ease-in-out;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}
.link:hover::after {
  width: 100%;
}
</style>

