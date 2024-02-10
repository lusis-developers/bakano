<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'BAKANO | Agencia de Marketing Digital',
})

const showMessageFormSubmited = ref(false);

function closeMessageFormSubmited() {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <LandingPageHeader/>
      <div class="main">
        <h1 class="main-tittle">
          Hagamos que hablen de tu negocio
        </h1>
        <h2 class="main-subtittle">
          Posiciónate en las Redes Sociales
        </h2>
      </div>
    </div> 
    <div class="register-wrapper">
      <figure class="figure">
        <img 
          src="~/assets/images/landing-image.jpg" 
          alt="image" 
          class="figure-img" />
      </figure>
      <LandingPageForm @close-message-form-submitted="closeMessageFormSubmited">
        <template #form-paragraph>
          ¡Cada negocio es un mundo diferente! Creamos contenido y estrategias
          BAKANES para redes sociales de acuerdo con TU NEGOCIO
        </template>
      </LandingPageForm>
    </div>
    <Transition name="slide-in-down" appear>
      <LandingPageModalFormSubmited
        v-if="showMessageFormSubmited" 
        @close-menu="closeMessageFormSubmited" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-image: url('@/assets/wave.svg');
  background-size: auto 70%;
  background-repeat: no-repeat;
  display: grid;
  @media (min-width: $desktop-lower-breakpoint) {
    background-size: auto 56%;
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  &-tittle {
    font-family: $primary-font;
    font-size: $font-size-large;
    font-weight: $font-weight-bold;
    color: #fff;
    text-align: center;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;
    }
  }
  &-subtittle {
    font-family: $secondary-font;
    font-size: $font-size-small;
    font-weight: $font-weight-normal;
    text-align: center;
    color: #fff;
    margin-bottom: 12px;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-normal;
    }
    @media (min-width: $desktop-upper-breakpoint) {
      font-size: $font-size-large;
    }
  }
}
.figure {
  margin: auto;
  margin-bottom: 16px;
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-img {
    border-radius: 20px;
    min-width: 0;
    @media (max-width: $mobile-lower-breakpoint) {
      max-width: 85%;
    }
  }
  @media (min-width: $tablet-upper-breakpoint) {
    max-height: 100%;
    max-width: 45%;
  }
}
.register-wrapper {
  min-width: 0;
  @media (min-width: $desktop-lower-breakpoint){
    display: flex;
    height: max-content;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    gap: 10%;
  }
  @media (min-width: $desktop-upper-breakpoint) {
    padding: 48px 64px;    
  }
}
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
  border-radius: 20px;
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
:deep(.crush-button) {
  border: none;
  color: $black;
  background-color: $pink;
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-button.disabled) {
  background-color: hsla(344, 79%, 53%, .4);
  border: none;
  color: $black;
}

</style>