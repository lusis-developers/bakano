<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';
import emailjs from '@emailjs/browser';

import BakanoIsotipoNegro from "@/assets/images/bakano-isotipo-negro.png"
import BakanoLogotipoNegro from "@/assets/images/bakano-logotipo-negro.png";

const config = useRuntimeConfig();

const rules = {
  validateName: [
    {
      validate: (value: string) => value.length >= 6,
      message: 'Por favor, coloca tu nombre completo'
    }
  ],
  validateNumber: [
    {
      validate: (value: string) => /^\d+$/.test(value) && value.length > 10,
      message: 'Por favor, ingresa tu número completo'
    }
  ]
}

const showMessageFormSubmited = ref(false);
const inputKey = ref(0)
const form = reactive({
  name: '',
  phone: '',
})

const formIsValid = computed(() => {
  return (
    form.name !== '' &&
    form.phone !== '' &&
    rules.validateName.every(rule => rule.validate(form.name)) &&
    rules.validateNumber.every(rule => rule.validate(form.phone))
  )
})

function closeMessageFormSubmited() {
  showMessageFormSubmited.value = !showMessageFormSubmited.value;
}
function resetInputs() {
  form.name = '';
  form.phone = '';
  inputKey.value++
}

async function sendEmail() {
  const mail = {
    from_name: form.name,
    phoneNumber: form.phone,
  }
  if (formIsValid.value) {
    try {
      await emailjs.send(
        config.public.serviceId,
        config.public.templateId,
        mail,
        config.public.publicKey,
      );
      closeMessageFormSubmited();
      console.log('SUCCESSFULLY_SEND_EMAIL');
      resetInputs();
    } catch (error) {
      console.error('CANNOT_SEND_EMAIL', error)
    }
  }
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
      <form class="register-wrapper-card">
        <p class="register-wrapper-card-paragraph">
          ¡Cada negocio es un mundo diferente! Creamos contenido y estrategias
          BAKANES para redes sociales de acuerdo con TU NEGOCIO
        </p>

        <CrushTextField 
          v-model="form.name" 
          :hideLabel=true 
          :required=true 
          :valid-rules="rules.validateName"
          :key="inputKey" 
          label="Nombre de tu negocio:" 
          placeholder="Nombre de tu negocio" />

        <CrushTextField 
          v-model="form.phone" 
          :hideLabel=true 
          :required=true 
          :valid-rules="rules.validateNumber"
          :key="inputKey" 
          label="Número de teléfono:" 
          placeholder="Número de teléfono" />

        <div class="wrapper-button">
          <CrushButton 
            :small=true 
            text="¡Arranquemos!" 
            variant="alert" 
            @click.prevent="sendEmail" />
        </div>
      </form>
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
  }

  @media screen and (min-width: 768px) {
    max-height: 100%;
    max-width: 45%;
  }
}

.register-wrapper {
  &-card {
    max-width: 80%;
    margin: auto;

    &-paragraph {
      font-family: $secondary-font;
      margin-bottom: .9rem;
      font-size: $font-size-small;
      font-weight: $font-weight-bold;
      color: $black;
      @media screen and (min-width: 768px) {
        font-size: $font-size-normal;
      }
    }
  }

  @media screen and (min-width: 1000px){
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

.wrapper-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.crush-button) {
  border: none;
  color: $black;
  background-color: $pink;
}

:deep(.crush-text-field .input-container) {
  border-radius: 20px;
  padding: 0.7rem;
}


:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
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