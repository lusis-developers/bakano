import { ref, reactive, computed } from 'vue';
import emailjs from '@emailjs/browser';

import { validateName, validateEmail, validatePhone } from '~/utils/LandingForm.regex';


export function useRegistrationForm() {
  const config = useRuntimeConfig();
  const inputKey = ref(0);
  const form = reactive({
    name: '',
    email: '',
    phone: '',
  });

  const rules = {
    validateName: [
      {
        validate: (value: string) => validateName(value),
        message: 'Por favor, coloca tu nombre completo',
      },
    ],
    validateEmail: [
      {
        validate: (value: string) => validateEmail(value),
        message: 'Por favor, coloca un email válido',
      },
    ],
    validateNumber: [
      {
        validate: (value: string) => validatePhone(value),
        message: 'Por favor, ingresa tu número completo',
      },
    ],
  };

  const formIsValid = computed(() => {
    return (
      form.name !== '' &&
      form.email !== '' &&
      form.phone !== '' &&
      rules.validateName.every((rule) => rule.validate(form.name)) &&
      rules.validateEmail.every((rule) => rule.validate(form.email)) &&
      rules.validateNumber.every((rule) => rule.validate(form.phone))
    );
  });

  function resetInputs() {
    form.name = '';
    form.email = '';
    form.phone = '';
    inputKey.value++;
  }

  async function sendEmail() {
    const mail = {
      from_name: form.name,
      email: form.email,
      phoneNumber: form.phone,
    };
    if (formIsValid.value) {
      try {
        await emailjs.send(config.public.serviceId, config.public.templateId, mail, config.public.publicKey);
        resetInputs();
      } catch (error) {
        console.error('CANNOT_SEND_EMAIL', error);
      }
    }
  }

  return {
    form,
    rules,
    inputKey,
    formIsValid,
    sendEmail,
  };
}
