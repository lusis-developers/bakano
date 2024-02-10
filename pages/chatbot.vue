<script setup lang="ts">
import Typed from 'typed.js';

import { contentSections, contentGridSection, images } from '../utils/LandingContent';
import CrushButton from '@nabux-crush/crush-button';

const showMessageFormSubmited = ref(false);

function closeMessageFormSubmited() {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}

onMounted(() => {
  const colors = ['red', 'orange', 'indigo'];
  const words = ['experiencias', 'conocimiento', 'clientes'];
  const coloredWords = words.map((word, index) => {
    const color = colors[index % colors.length];
    return `<span style="color: ${color};">${word}</span>`;
  });
  new Typed('.typed-text', {
    strings: coloredWords,
    typeSpeed: 80,
    backSpeed: 80,
    startDelay: 0,
    loop: true,
    showCursor: false,
    contentType: 'html',
  });
});
</script>

<template>
  <div class="wrapper-chatbot">
    <LandingPageHeader />
    <div class="main">
      <div class="main-content">
        <h1 class="main-tittle">
          Convierte conversaciones <br>en <span class="typed-text"></span>
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
              <NuxtLink 
                to="#form" 
                class="main-button-link">
                  Solicita información
              </NuxtLink>
          </CrushButton>
        </div>
      </div>
      <div class="main-figure">
        <img 
          src="~/assets/chatbot-bot.svg" 
          class="main-img" 
          alt="chatbot-image">
      </div>
    </div>

    <LandingPageSection 
      :contentSection="contentSections[0]" 
      :images="images"
      :showCarousel="true" />
    <LandingPageSection
      :contentSection="contentSections[1]"
      :showButton="true"
      :gridSection="contentGridSection[0][1]"
      :gridClasses="contentGridSection[0][0]" />
    <LandingPageSection
      :contentSection="contentSections[2]"
      :gridSection="contentGridSection[1][1]"
      :gridClasses="contentGridSection[1][0]" />
    <LandingPageSection 
      :contentSection="contentSections[3]"
      :gridSection="contentGridSection[2][1]" 
      :gridClasses="contentGridSection[2][0]"/>
    <LandingPageSection 
      :contentSection="contentSections[4]"
      :showForm="false">
      <template #Form>
        <LandingPageForm @close-message-form-submitted="closeMessageFormSubmited" />
      </template>
    </LandingPageSection>
    <LandingPageFooter />
    <Transition name="slide-in-down" appear>
      <LandingPageModalFormSubmited
        v-if="showMessageFormSubmited" 
        @close-menu="closeMessageFormSubmited" />
    </Transition>
</div>
</template>

<style lang="scss" scoped>
.typed-text {
  min-width: 288px;
  display: inline-block;
  text-align: left;
}
:deep(.header){
  background-color: #e6285c;
}
.main{
  min-height: 80dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  @media (min-width: $tablet-upper-breakpoint) {
    max-width: 80vw;
    margin: 0 auto;
  }
  @media (min-width: $desktop-lower-breakpoint) {
    height: 84dvh;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 80%;
    margin: auto;
  }
  &-img{
    max-width: 100%;
  }
  &-tittle{
    font-family: $primary-font;
    font-size: $font-size-large;
    text-align: center;
    margin-bottom: 24px;
    @media screen and (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;      
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    font-size: $font-size-normal;
    margin-bottom: 24px;
    text-align: center;
  }
  &-button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    &-link{
      text-decoration: none;
      color: $black;
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
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
  padding: 12px;
  border: 1.5px solid #8b888e;
}
:deep(.crush-text-field .input-container.active) {
  border-color: grey;
}
:deep(.crush-text-field) {
  @media (max-width: $mobile-upper-breakpoint) {
    margin-bottom: 8px;
  }
}
:deep(.register-wrapper-card) {
  max-width: 100%;
  @media (min-width: $tablet-upper-breakpoint) {
    width: 80%;
  }
  @media (min-width: $desktop-lower-breakpoint) {
    width: 40%;
  }
}
</style>