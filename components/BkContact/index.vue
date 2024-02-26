<script lang="ts" setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const showMessageFormSubmited = ref(false);

function closeMessageFormSubmited():void {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}

onMounted(() => {
const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to(".logo", { 
    scale: 1.2, 
    duration: 0.6, 
    ease: "power1.inOut" 
  })
  .to(".logo", { 
    scale: 1, 
    duration: 0.6, 
    ease: "power1.inOut" 
  });
});
</script>

<template>
  <section class="contact">
    <div v-if="!showMessageFormSubmited">
      <h2 class="contact-title">
        Hagamos algo
      </h2>
      <figure class="contact-figure">
        <img 
        src="@/assets/images/bakano-logotipo-blanco.png" 
        alt="Logotipo Bakano" 
        class="contact-figure-logo logo"/>
      </figure>
      <div class="contact-form">
        <LandingPageBkForm 
          :hideLabel="true"
          @close-message-form-submitted="closeMessageFormSubmited"/>
      </div>
  </div>
  <BkContactModalCheck v-if="showMessageFormSubmited" />
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background-color: $black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-form{
    margin: 0 auto;
    @media (min-width: $tablet-upper-breakpoint){
      width: 72%;
    }
  }
}
.contact-title {
  text-align: center;
  font-family: $primary-font;
  font-size: $font-size-extra-large;
  color: $white;
  margin: 24px 0;
}
.contact-figure {
  display: flex;
  width: 72vw;
  margin: 0 auto;
  &-logo {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
  }
}
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
  background-color: #fff;
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