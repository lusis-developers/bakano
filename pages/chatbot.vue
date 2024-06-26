<script setup lang="ts">
import Typed from 'typed.js';

useHead({
  title: 'BAKANO | Chatbot para WhatsApp',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    {
      name: 'description',
      content: 'Ofrece soluciones de mensajería instantánea con un chatbot para WhatsApp. Automatiza y centraliza la comunicación con tus clientes.'
    }
  ]
});

const emit = defineEmits(['toggle-menu']);

const menuOpen = ref(false);

function toggleMenu():void {
  menuOpen.value = !menuOpen.value;
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
    <LandingPageHeader 
      :colorLogo="menuOpen" 
      @toggle-menu="toggleMenu" />
    <LandingPageMenu 
      :isVisible="menuOpen" 
      @close-menu="toggleMenu" />
    <div class="main">
      <div class="main-content">
        <h1 class="main-tittle">
          Convierte conversaciones <br>en <span class="typed-text"></span>
        </h1>
        <p class="main-paragraph">
          Redefine tu estrategia de servicio al cliente 
          con un Chatbot de Whatsapp conectado a Inteligencia Artificial.
        </p>
      <GlobalBkButton />
      </div>
      <div class="main-figure">
        <img 
          src="~/assets/LandingPage/chatbot-bot.svg" 
          class="main-img" 
          alt="chatbot-image">
      </div>
    </div>
    <LandingPageBkCarouselSection />
    <LandingPageBkSectionNumbers />
    <LandingPageBkSectionRestaurant />
    <LandingPageBkSectionBanner />
    <LandingPageBkSectionCards />
    <LandingPageBkContactForm />
    <LandingPageBkFooter />
  </div>
</template>

<style lang="scss" scoped>
.typed-text {
  min-width: 168px;
  display: inline-block;
  text-align: left;
  @media (min-width: $tablet-upper-breakpoint) {
    min-width: 288px;
  }
}
:deep(.header){
  background-color: $black;
}
.main{
  min-height: 90dvh;
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
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;      
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    font-size: $font-size-normal;
    margin-bottom: 24px;
    text-align: center;
  }
}
</style>