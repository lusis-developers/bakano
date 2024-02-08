<script setup lang="ts">
import CrushFooter from '@nabux-crush/crush-footer';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.png';
</script>

<template>
  <div>
    <CrushFooter 
      :logoSrc="BakanoLogotipoNegro">
      <template #social-icons>
        <NuxtLink to="https://www.instagram.com/bakanoagency/" target="_blank">
          <img src="~/assets/social-icons/instagram.svg" alt="instagram-icon" class="social-img">
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/bakanoagency" target="_blank">
          <img src="~/assets/social-icons/facebook.svg" alt="facebook-icon" class="social-img">
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/company/bakano-agency/" target="_blank">
          <img src="~/assets/social-icons/linkeding.svg" alt="linkeding-icon" class="social-img">
        </NuxtLink>
        <NuxtLink to="https://www.tiktok.com/@bakano.agency?_t=8jfKHtOoJxW&_r=1" target="_blank">
          <img src="~/assets/social-icons/tiktok.svg" alt="tiktok-icon" class="social-img">
        </NuxtLink>
      </template>
    </CrushFooter>
  </div>
</template>

<style scoped>
.social-img{
  max-width: 30px;
}

:deep(.footer){
  max-width: none;
}
</style>