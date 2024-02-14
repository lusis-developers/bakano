<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';

import { useRegistrationForm } from '~/composables/useForm';

const emits = defineEmits(['closeMessageFormSubmitted']);
const props = defineProps({
  hideLabel: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const { 
  form, 
  rules, 
  inputKey, 
  formIsValid, 
  sendEmail 
} = useRegistrationForm();

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
      :required=true 
      :validRules="rules.validateName" 
      :key="inputKey"
      :hideLabel="props.hideLabel"
      :placeholder="props.hideLabel ? 'Nombre de tu negocio' : 'Bakano'" 
      label="Nombre de tu negocio" />
    <CrushTextField 
      v-model="form.email" 
      :required=true 
      :validRules="rules.validateEmail" 
      :key="inputKey"
      :hideLabel="props.hideLabel"
      :placeholder="props.hideLabel ? 'Email' : 'bakano@gmail.com'" 
      label="Email" />
    <CrushTextField 
      v-model="form.phone" 
      :required=true 
      :validRules="rules.validateNumber"
      :key="inputKey" 
      :hideLabel="props.hideLabel"
      :placeholder="props.hideLabel ? 'Número de teléfono' : '0991238512'" 
      label="Número de teléfono" />
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
    margin-bottom: 32px;
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
:deep(.crush-text-field .crush-text-field-label-text){
  font-family: $secondary-font;
  color: $black;
  font-size: $font-size-small;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-button) {
  border: none;
  color: $black;
  background-color: $pink;
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-button.disabled) {
  background-color: hsla(344, 79%, 53%, .4);
  border: none;
  color: $black;
}
</style>