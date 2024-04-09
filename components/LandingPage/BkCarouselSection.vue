<script setup lang="ts">
import chatbotAutomate from '@/assets/LandingPage/chatbot-automate.svg';
import chatbotBot from '@/assets/LandingPage/chatbot-bot.svg';

const images = ref([
  chatbotAutomate,
  chatbotBot,
]);
</script>

<template>
  <section class="carousel">
    <div class="carousel-content">
      <h2 class="carousel-content-title">
        Mucho más que un Chatbot (de los que ya conoces)
      </h2>
      <p class="carousel-content-paragraph">
        FUDIBOT es un Chatbot de Whatsapp está conectado con Open IA para 
        generar conversaciones utilizando inteligencia artificial con personas 
        de manera natural y fluida. Permitirá a tu negocio automatizar procesos 
        y ofrecer respuestas automáticas y precisas a las consultas de tu cliente. 
      </p>
    </div>
    <GlobalBkCarousel :images="images"/>
  </section>
</template>

<style lang="scss" scoped>
.carousel {
  padding: 24px;
  background-color: rgba(237, 233, 233, 0.35);
  margin-bottom: 32px;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 0 auto;
  }
  &-content {
    text-align: center;
    &-title {
      font-family: $primary-font;
      margin-bottom: 24px;
      @media (min-width: $tablet-upper-breakpoint){
        max-width: 80%;
        margin: 0 auto 48px;
        font-size: $font-size-extra-large;
      }
    }
    &-paragraph {
      font-family: $secondary-font;
      margin: 48px 0;
      @media (min-width: $tablet-upper-breakpoint){
        max-width: 80%;
        margin: 40px auto 72px;
      }
      @media (min-width: $desktop-upper-breakpoint) {
        max-width: 60%;
      }
    }
  }
}
</style>