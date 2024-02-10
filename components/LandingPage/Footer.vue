<script setup lang="ts">
import CrushFooter from '@nabux-crush/crush-footer';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.png';
import instagramSvg from '~/assets/social-icons/instagram.svg';
import facebookSvg from '~/assets/social-icons/facebook.svg';
import linkedingSvg from '~/assets/social-icons/linkeding.svg';
import tiktokSvg from '~/assets/social-icons/tiktok.svg';

const socialIcons = [
  { name: 'instagram', url: 'https://www.instagram.com/bakanoagency/', src: instagramSvg },
  { name: 'facebook', url: 'https://www.facebook.com/bakanoagency', src: facebookSvg },
  { name: 'linkeding', url: 'https://www.linkedin.com/company/bakano-agency/', src: linkedingSvg },
  { name: 'tiktok', url: 'https://www.tiktok.com/@bakano.agency?_t=8jfKHtOoJxW&_r=1', src: tiktokSvg },
]
</script>

<template>
  <div>
    <CrushFooter 
      :logoSrc="BakanoLogotipoNegro">
      <template #social-icons>
        <NuxtLink 
          v-for="icon in socialIcons" 
          :key="icon.name" 
          :to="icon.url" 
          target="_blank">
            <img 
              :src="icon.src" 
              :alt="`${icon.name}-icon`" 
              class="social-img">
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
:deep(.footer-image){
  overflow: hidden;
}
</style>