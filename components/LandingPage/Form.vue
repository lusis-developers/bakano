<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';
import emailjs from '@emailjs/browser';

import { validateName, validateEmail, validatePhone } from '~/utils/LandingForm.regex';

const emits = defineEmits(['closeMessageFormSubmited'])

const config = useRuntimeConfig();

const rules = {
  validateName: [
    {
      validate: (value: string) => validateName(value),
      message: 'Por favor, coloca tu nombre completo'
    }
  ],
  validateEmail: [
  {
    validate: (value: string) => validateEmail(value),
    message: 'Por favor, coloca un email válido'
  }
],
  validateNumber: [
    {
      validate: (value: string) => validatePhone(value),
      message: 'Por favor, ingresa tu número completo'
    }
  ]
}

const inputKey = ref(0)
const form = reactive({
  name: '',
  email: '',
  phone: '',
})
const formIsValid = computed(() => {
  return (
    form.name !== '' &&
    form.email !== '' &&
    form.phone !== '' &&
    rules.validateName.every(rule => rule.validate(form.name)) &&
    rules.validateEmail.every(rule => rule.validate(form.email)) &&
    rules.validateNumber.every(rule => rule.validate(form.phone))
  )
})

function resetInputs() {
  form.name = '';
  form.email = '';
  form.phone = '';
  inputKey.value++
}

async function sendEmail() {
  const mail = {
    from_name: form.name,
    email: form.email,
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
      emits('closeMessageFormSubmited');
      resetInputs();
    } catch (error) {
      console.error('CANNOT_SEND_EMAIL', error)
    }
  }
}
</script>

<template>
  <form class="register-wrapper-card">
    <p class="register-wrapper-card-paragraph">
      ¡Cada negocio es un mundo diferente! Creamos contenido y estrategias
      BAKANES para redes sociales de acuerdo con TU NEGOCIO
    </p>
    <CrushTextField 
      v-model="form.name" 
      :hideLabel=true 
      :required=true 
      :validRules="rules.validateName" 
      :key="inputKey"
      label="Nombre de tu negocio"
      placeholder="Nombre de tu negocio" />
    <CrushTextField 
      v-model="form.email" 
      :hideLabel=true 
      :required=true 
      :validRules="rules.validateEmail" 
      :key="inputKey"
      label="Email"
      placeholder="Email" />
    <CrushTextField 
      v-model="form.phone" 
      :hideLabel=true 
      :required=true 
      :validRules="rules.validateNumber"
      :key="inputKey" 
      label="Número de teléfono"
      placeholder="Número de teléfono" />
    <div class="wrapper-button">
      <CrushButton 
        :small=true 
        :disabled="!formIsValid"
        text="¡Arranquemos!" 
        variant="alert" 
        @click.prevent="sendEmail" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.register-wrapper-card {
  max-width: 80%;
  margin: auto;
  &-paragraph {
    font-family: $secondary-font;
    margin-bottom: 16px;
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    color: $black;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-normal;
    }
  }
}
.wrapper-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>