<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'BAKANO | Agencia de Marketing Digital',
})

import BakanoIsotipoNegro from "@/assets/images/bakano-isotipo-negro.png"
import BakanoLogotipoNegro from "@/assets/images/bakano-logotipo-negro.png";

const showMessageFormSubmited = ref(false);

function closeMessageFormSubmited() {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <Header 
        :IsotipoSrc="BakanoIsotipoNegro" 
        :LogotipoSrc="BakanoLogotipoNegro" 
        brandName="Bakano" />
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
          src="@/assets/images/imagen-principal.jpg" 
          alt="image" 
          class="figure-img" />
      </figure>
      <Form @close-message-form-submited="closeMessageFormSubmited"/>
    </div>
    <Transition name="slide-in-down" appear>
      <ViewFormSubmited 
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
  @media screen and (min-width: 1000px) {
    background-size: auto 56%;
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  &-tittle {
    font-family: $primary-font;
    font-size: $font-size-large;
    font-weight: $font-weight-bold;
    color: #fff;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: $font-size-extra-large;
    }
  }
  &-subtittle {
    font-family: $secondary-font;
    font-size: $font-size-small;
    font-weight: $font-weight-normal;
    text-align: center;
    color: #fff;
    margin-bottom: .8rem;
    @media screen and (min-width: 768px) {
      font-size: $font-size-normal;
    }
    @media screen and (min-width: 1600px) {
      font-size: $font-size-large;
    }
  }
}
.figure {
  margin: auto;
  margin-bottom: 1rem;
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &-img {
    border-radius: 1.25rem;
    @media screen and (max-width: 350px) {
      max-width: 85%;
    }
  }
  @media screen and (min-width: 768px) {
    max-height: 100%;
    max-width: 45%;
  }
}
.register-wrapper {
  @media screen and (min-width: 1200px){
    display: flex;
    height: max-content;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 3rem 4rem;
    gap: 10%;
  }
}
:deep(.crush-button) {
  border: none;
  color: $black;
  background-color: $pink;
  @media screen and (min-width: 768px) {
    font-size: $font-size-normal;
  }
  @media screen and (min-width: 1600px) {
    font-size: $font-size-large;
  }
}
:deep(.crush-text-field .input-container) {
  border-radius: 20px;
  padding: 0.7rem;
  border: 1.5px solid #8b888e;
}
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media screen and (min-width: 768px) {
    font-size: $font-size-normal;
  }
  @media screen and (min-width: 1600px) {
    font-size: $font-size-large;
  }
}
:deep(.crush-text-field .input-container.active) {
  border-color: grey;
}
.slide-in-down-enter-active {
  transition: all 0.3s ease;
}
.slide-in-down-enter-from {
  transform: translateY(-100%);
}
.slide-in-down-enter-to {
  transform: translateY(0);
}
.slide-in-down-leave-active {
  transition: all 0.3s ease;
}
.slide-in-down-leave-from {
  transform: translateY(0);
}
.slide-in-down-leave-to {
  transform: translateY(-100%);
}
</style>