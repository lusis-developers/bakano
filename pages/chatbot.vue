<script setup lang="ts">
import { contentSections, contentGridSection, images } from '../utils/LandingContent';
import CrushButton from '@nabux-crush/crush-button';
</script>

<template>
  <div class="wrapper-chatbot">
    <LandingPageHeader />
    <div class="main">
      <div class="main-content">
        <h1 class="main-tittle">
          Chatbots para WhatsApp Business con Inteligencia Artificial
        </h1>
        <p class="main-paragraph">
          Ofrece soluciones de mensajería instantánea con un chatbot para WhatsApp. Automatiza y
          centraliza la comunicación con tus clientes. 📱💬
        </p>
        <div class="main-button">
          <CrushButton 
            :small=true 
            text="Solicita información" 
            variant="alert">
            <NuxtLink to="/" class="main-button-link">Solicita información</NuxtLink>
          </CrushButton>
        </div>
      </div>
      <div class="main-figure">
        <img src="~/assets/chatbot-bot.svg" class="main-img" alt="chatbot-image">
      </div>
    </div>

    <LandingPageSection 
      :contentSection="contentSections[0]" 
      :images="images"
      :showCarousel="true" />
    <LandingPageSection
      :contentSection="contentSections[1]"
      :showButton="true"
      :gridSection="contentGridSection[0]" />
    <LandingPageSection
      :contentSection="contentSections[2]"
      :gridSection="contentGridSection[1]" />
    <LandingPageSection 
      :contentSection="contentSections[3]"
      :gridSection="contentGridSection[2]" />
    <LandingPageSection 
      :contentSection="contentSections[4]"
      :showForm="true" />
    <LandingPageFooter />
</div>
</template>

<style lang="scss" scoped>
:deep(.header){
  background-color: #e6285c;
}

.main{
  height: 85dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  @media (min-width: $tablet-upper-breakpoint) {
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 80%;
    margin: auto;
  }
  &-content{
    @media (min-width: $tablet-upper-breakpoint) {
      max-width: 45%;
    }
  }
  &-img{
    max-width: 100%;
    @media (min-width: $tablet-upper-breakpoint) {
      // position: absolute;
      max-width: 100%;
      // right: 0;
      // top: 50%;
      // transform: translateY(-50%);
    }
  }
  &-tittle{
    font-family: $primary-font;
    font-size: $font-size-large;
    text-align: center;
    margin-bottom: 20px;
    @media screen and (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;      
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    font-size: $font-size-normal;
    margin-bottom: 20px;
  }
  &-button{
    display: flex;
    justify-content: center;
    align-items: center;
    &-link{
      text-decoration: none;
      color: $black;
      scroll-behavior: smooth;
    } 
  }
}
:deep(.crush-button) {
  border: none;
  color: $black;
  background-color: hsla(344, 79%, 53%, .4);
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
</style>