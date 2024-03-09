<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
let toggleParagraph = ref(false);

function onMountedAnimationHandler():void {
  tl.to('.philosophy__image--alfaro', {
    opacity: 0,
    y: '200%',
    x: '-100%',
    duration: 3,
    onComplete: () => {
      toggleParagraph.value = true; 
    },
  })
  .to('.philosophy__container1', {
    scale: 0,
    opacity: 0,
    duration: 3,
  }, '-=2') 
  .from('.philosophy__image--glasses', {
    opacity: 0,
    scale: 0,
    duration: 2,  
  }, '-=1.5')
  .from('.philosophy__container-secondary', {
    scale: 0,
    duration: 2,  
    onReverseComplete: () => {
      toggleParagraph.value = false;
    },
  }, '-=1');

  ScrollTrigger.create({
    trigger: '.section2',
    start: 'top 30%',
    end: 'center top',
    animation: tl,
    toggleActions: 'play none none reverse',
    scrub: 1,
  });
}

onMounted(onMountedAnimationHandler);
</script>

<template>
  <section class="philosophy">
    <div class="section">
      <div  
        v-show="!toggleParagraph"
        class="philosophy__container philosophy__container1">
          <h1 class="philosophy__title">
            Nuestra Filosofía
          </h1>
          <p class="philosophy__paragraph">
            En BAKANO, no solo creamos experiencias digitales extraordinarias; 
            construimos relaciones duraderas basadas en la confianza, la transparencia y la colaboración. 
            Estamos aquí para ayudarte a alcanzar tus objetivos y a hacer realidad tus sueños digitales.
          </p>
      </div>
      <img
        v-show="!toggleParagraph" 
        class="philosophy__image philosophy__image--alfaro" 
        loading="lazy"
        src="~/assets/images/eloyalfaro-bn.webp" 
        alt="Eloy Alfaro" />
    </div>
    <div class="section section2">
      <img
        v-show="toggleParagraph"
        class="philosophy__image philosophy__image--glasses"
        loading="lazy"
        src="~/assets/images/eloyalfaro-congafas2.webp"
        alt="Gafas cool" />
      <div 
        v-show="toggleParagraph"
        class="philosophy__container philosophy__container-secondary">
          <h2 class="philosophy__title philosophy__title-secondary">
            O mejor dicho
          </h2>
          <p class="philosophy__paragraph philosophy__paragraph-2">
            Usamos la tecnología a tu favor, con contenido y productos digitales increíbles 
            para que el potencial de tu negocio explote
          </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.philosophy{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  align-items: center;
  padding: 10%;
  &__image{
    width: 72%;
    @media (min-width: $tablet-upper-breakpoint) {
      width: 40%;      
    }
  }
}
.philosophy__container{
  text-align: center;
  @media (min-width: $tablet-upper-breakpoint) {
    text-align: start;
    width: 40%;
  }
}
.philosophy__title{
  font-size: $font-size-extra-large;
  font-family: $primary-font;
  margin-bottom: 2rem;
}
.philosophy__paragraph{
  font-size: $font-size-large;
  font-family: $secondary-font;
  line-height: 1.5;
  background-color: rgb(212, 210, 210);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
  &-2{
    background-color: #e2a75a;
  }
}
.section{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: $tablet-upper-breakpoint) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 32px;
  }
}
.philosophy__image--alfaro{
  filter: grayscale(100%);
}
</style>