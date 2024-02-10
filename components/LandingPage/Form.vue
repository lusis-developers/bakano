<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';
import { useRegistrationForm } from '~/composables/useForm';

const emits = defineEmits(['closeMessageFormSubmitted']);

const { form, rules, inputKey, formIsValid, sendEmail } = useRegistrationForm();

async function sendEmailForm() {
 await sendEmail();
  emits('closeMessageFormSubmitted');
}
</script>

<template>
  <form class="register-wrapper-card" id="form">
    <p class="register-wrapper-card-paragraph">
      <slot name="form-paragraph"></slot>
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
        @click.prevent="sendEmailForm" />
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