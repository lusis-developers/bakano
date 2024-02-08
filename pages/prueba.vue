<template>
<div>
  <LandingPageCarousel2 :images="images" />
  <LandingPageCarousel :images="images" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import chatbotAutomate from '@/assets/chatbot-automate.svg';
import chatbotManage from '@/assets/chatbot-manage.svg';
import chatbotBot from '@/assets/chatbot-bot.svg';
import chatbotImage from '@/assets/chatbot-image.svg';

const images = ref([
  chatbotAutomate,
  chatbotManage,
  chatbotBot,
  chatbotImage,
  chatbotAutomate,
  chatbotManage,
  chatbotBot,
  chatbotImage,
  chatbotAutomate,
  chatbotManage,
  chatbotBot,
]);

</script>
