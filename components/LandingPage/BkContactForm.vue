<script setup lang="ts">
const showMessageFormSubmited = ref(false);

function closeMessageFormSubmited() {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}
</script>

<template>
  <section class="contact">
    <div class="contact-content">
      <h2 class="contact-content-title">
        ¡Transforma tu negocio con un poderoso chatbot para WhatsApp!
      </h2>
      <p class="contact-content-paragraph">
        Automatiza y optimiza la comunicación con tus clientes las 24 horas del día. Desde responder preguntas frecuentes hasta guiar a los clientes en sus compras, nuestro chatbot impulsado por inteligencia artificial hace el trabajo pesado por ti. Aprovecha esta oportunidad para aumentar tus ventas y fortalecer tu marca hoy mismo. 📱💬
      </p>
    </div>
    <LandingPageBkForm @close-message-form-submitted="closeMessageFormSubmited"/>
    <Transition name="slide-in-down" appear>
      <GlobalBkModalFormSubmited
        v-if="showMessageFormSubmited" 
        @close-menu="closeMessageFormSubmited" />
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
.contact{
  padding: 24px;
  margin-bottom: 32px;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 0 auto;
  }
  @media (min-width: $desktop-upper-breakpoint) {
    max-width: 80vw;
    display: flex;
    gap: 80px;
    justify-content: center;
  }
  &-content{
    text-align: center;
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 45%;
    }
    &-title {
      font-family: $primary-font;
      margin-bottom: 24px;
      @media screen and (min-width: $tablet-upper-breakpoint){
        margin: 0 auto 48px;
        font-size: $font-size-extra-large;
      }
    }
    &-paragraph {
      font-family: $secondary-font;
      margin: 48px 0;
      @media screen and (min-width: $tablet-upper-breakpoint){
        max-width: 80%;
        margin: 40px auto 72px;
      }
      @media screen and (min-width: $desktop-upper-breakpoint) {
        max-width: 100%;
      }
    }
  }
}
:deep(.register-wrapper-card) {
  max-width: 100%;
  @media (min-width: $tablet-upper-breakpoint) {
    width: 80%;
  }
  @media (min-width: $desktop-upper-breakpoint) {
    width: 40%;
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
</style>