<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
import CrushFooter from '@nabux-crush/crush-footer';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.png';

</script>

<template>
  <div class="wrapper-chatbot">
    <LandingPageHeader />

    <div class="main">
      <div class="main-content">
        <h1 class="main-tittle">Chatbots para WhatsApp Business con Inteligencia Artificial</h1>
        <p class="main-paragraph">Ofrece soluciones de mensajería instantánea con un chatbot para WhatsApp. Automatiza y
          centraliza la comunicación con tus clientes. 📱💬</p>
        
        <div class="main-button">
          <CrushButton 
            :small=true 
            text="Solicita información" 
            variant="alert">
            <a href="#form-wrapper" class="main-button-link">Solicita información</a>
          </CrushButton>
        </div>
      </div>

      <div class="main-figure">
        <img src="~/assets/chatbot-bot.svg" class="main-img" alt="chatbot-image">
      </div>
    </div>

    <section class="section">
      <div class="section-content">
        <h2 class="section-tittle">Mucho mas que un software para crear chatbots</h2>
        <p class="section-paragraph">Un chatbot para WhatsApp es un programa de inteligencia artificial que simula una
          conversación con personas a través de la aplicación de mensajería instantánea. Los chatbots para WhatsApp
          permiten a las empresas automatizar y centralizar la comunicación con sus clientes, ofreciendo respuestas
          rápidas y precisas a sus consultas.</p>
      </div>

      <div class="section-image">
        <img src="~/assets/chatbot-manage.svg"  alt="chatbot-manage">
      </div>
    </section>

    <section class="section2">
      <div class="section2-content">
        <h2 class="section2-tittle">¿Por qué necesitas un chatbot para WhatsApp?</h2>
        <p class="section2-paragraph">Un chatbot para WhatsApp es una herramienta de comunicación que te permite
          automatizar y centralizar la atención al cliente, ofreciendo respuestas rápidas y precisas a sus consultas. Con
          un chatbot para WhatsApp podrás:</p>
      </div>
      <div class="section2-grid">
        <div class="section2-item">
          <img src="~/assets/chatbot-automate.svg" alt="chatbot-automate">
          <h3 class="section2-item-tittle">Automatizar la atención al cliente</h3>
          <p class="section2-item-paragraph">Un chatbot para WhatsApp te permite automatizar la atención al cliente,
            ofreciendo respuestas rápidas y precisas a sus consultas.</p>
        </div>
        <div class="section2-item">
          <img src="~/assets/chatbot-image.svg" alt="chatbot-centralize">
          <h3 class="section2-item-tittle">Centralizar la comunicación</h3>
          <p class="section2-item-paragraph">Un chatbot para WhatsApp te permite centralizar la comunicación con tus
            clientes, ofreciendo una experiencia de usuario más eficiente y satisfactoria.</p>
        </div>
        <div class="section2-item">
          <img src="~/assets/chatbot-manage.svg" alt="chatbot-engage">
          <h3 class="section2-item-tittle">Mejorar la experiencia del cliente</h3>
          <p class="section2-item-paragraph">Un chatbot para WhatsApp te permite mejorar la experiencia del cliente,
            ofreciendo respuestas rápidas y precisas a sus consultas.</p>
        </div>
      </div>
    </section>
    <section class="section-footer" id="form-wrapper">
      <h2 class="section-tittle">¡Transforma tu negocio con un poderoso chatbot para WhatsApp! </h2>
      <p class="section-paragraph">Automatiza y optimiza la comunicación con tus clientes las 24 horas del día. Desde responder preguntas frecuentes hasta guiar a los clientes en sus compras, nuestro chatbot impulsado por inteligencia artificial hace el trabajo pesado por ti. Aprovecha esta oportunidad para aumentar tus ventas y fortalecer tu marca hoy mismo. 📱💬</p>
      <LandingPageForm />
    </section>
    <CrushFooter 
      :logoSrc="BakanoLogotipoNegro">
      <template #social-icons>
        <NuxtLink to="https://www.instagram.com/bakanoagency/" target="_blank">
          <img src="~/assets/social-icons/instagram.svg" alt="instagram-icon">
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/bakanoagency" target="_blank">
          <img src="~/assets/social-icons/facebook.svg" alt="facebook-icon">
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/company/bakano-agency/" target="_blank">
          <img src="~/assets/social-icons/linkeding.svg" alt="">
        </NuxtLink>
      </template>
    </CrushFooter>
  </div>
</template>

<style lang="scss" scoped>
:deep(.header){
  background-color: #e6285c;
}

img{
  max-width: 100%;
}
.main{
  height: 85dvh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  &-tittle{
    font-family: $primary-font;
    font-size: $font-size-large;
    text-align: center;
    margin-bottom: 20px;
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
  &-img{
    max-width: 100%;
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

.section{
  padding: 25px;
  margin-bottom: 30px;
  &-tittle{
    font-family: $primary-font;
    text-align: center;
    margin-bottom: 15px;
  }
  &-paragraph{
    font-family: $secondary-font;
    margin-bottom: 30px;
  }
}

.section2{
  padding: 25px;
  margin-bottom: 30px;
  &-tittle{
    font-family: $primary-font;
    text-align: center;
    margin-bottom: 15px;
  }
  &-paragraph{
    font-family: $secondary-font;
    margin-bottom: 30px;
    text-align: center;
  }
  &-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  &-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    &-tittle{
      font-family: $primary-font;
      text-align: center;
      // margin-bottom: 15px;
    }
    &-paragraph{
      font-family: $secondary-font;
      text-align: center;
    }
  }
}

.section-footer{
  padding: 25px;
  // background-color: #e6285c;
  &-tittle{
    font-family: $primary-font;
    text-align: center;
    margin-bottom: 15px;
  }
  &-paragraph{
    font-family: $secondary-font;
    margin-bottom: 30px;
  }
}

:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
  // border-radius: 20px;
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
</style>