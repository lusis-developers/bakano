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
        Mucho mas que un software para crear chatbots
      </h2>
      <p class="carousel-content-paragraph">
        Un chatbot para WhatsApp es un programa de inteligencia artificial 
        que simula una conversación con personas a través de la aplicación 
        de mensajería instantánea. Los chatbots para WhatsApp permiten a las 
        empresas automatizar y centralizar la comunicación con sus clientes, 
        ofreciendo respuestas rápidas y precisas a sus consultas.
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