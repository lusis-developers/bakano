<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let containerMessage = ref(null);

const props = defineProps({
  isAnimationCompleted: Boolean 
});


watch(() => props.isAnimationCompleted, (newValue) => {
  if (newValue) {
    // Inicia las animaciones de scroll aquí
    gsap.from(containerMessage.value, {
      scrollTrigger: {
        trigger: containerMessage.value,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      x: '-100%',
      duration: 1
    });
    gsap.to(containerMessage.value, {
      scrollTrigger: {
        trigger: containerMessage.value,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
      x: '150%',
      duration: 1
    });
  }
});

</script>

<template>
  <div class="container">
    <p ref="containerMessage" class="container-message">
      Nuestro objetivo es democratizar el dinero y hacerlo accesible a todo el mundo desde unos valores que impregnan todas y cada una de nuestras decisiones y acciones: la inclusión, la igualdad y la diversidad.
    </p>
  </div>
  <div class="container-principal">
    <h2 class="container-principal-title">
      Ó hablando mas claro
    </h2>
    <p ref="containerRealMessage" class="container-principal-realMessage">
      Nuestro objetivo es democratizar el dinero y hacerlo accesible a todo el mundo desde unos valores que impregnan todas y cada una de nuestras decisiones y acciones: la inclusión, la igualdad y la diversidad.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &-message {
    font-size: 1.5rem;
    color: $black; 
    background-color: rgb(212, 210, 210); 
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    text-align: justify; 
    font-family: $primary-font;
  }
}
.container-principal {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &-title {
    color: $black;
    font-family: $primary-font;
    text-align: center;
  }
  &-realMessage {
    font-size: 1.5rem;
    color: $white; 
    background-color: $pink;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }
}
</style>