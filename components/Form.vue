<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';
import emailjs from '@emailjs/browser';

const emits = defineEmits(['closeMessageFormSubmited'])

const config = useRuntimeConfig();

const rules = {
  validateName: [
    {
      validate: (value: string) => value.length >= 1,
      message: 'Por favor, coloca tu nombre completo'
    }
  ],
  validateEmail: [
  {
    validate: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    message: 'Por favor, coloca un email válido'
  }
],
  validateNumber: [
    {
      validate: (value: string) => /^\d+$/.test(value) && value.length > 6,
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
      :valid-rules="rules.validateName" 
      :key="inputKey"
      placeholder="Nombre de tu negocio" />
      <CrushTextField 
      v-model="form.email" 
      :hideLabel=true 
      :required=true 
      :valid-rules="rules.validateEmail" 
      :key="inputKey"
      placeholder="Email" />
    <CrushTextField 
      v-model="form.phone" 
      :hideLabel=true 
      :required=true 
      :valid-rules="rules.validateNumber"
      :key="inputKey" 
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
    margin-bottom: .9rem;
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    color: $black;
    @media screen and (min-width: 768px) {
      font-size: $font-size-normal;
    }
    @media screen and (min-width: 1600px) {
      font-size: $font-size-large;
    }
  }
}
.wrapper-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>