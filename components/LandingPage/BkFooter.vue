<script setup lang="ts">
import CrushFooter from '@nabux-crush/crush-footer';
import BakanoLogotipoNegro from '@/assets/images/bakano-logotipo-negro.webp';

const socialIcons = [
  { 
    name: 'instagram', 
    url: 'https://www.instagram.com/bakanoagency/', 
    class: 'fa-brands fa-instagram'
  },
  { 
    name: 'facebook', 
    url: 'https://www.facebook.com/bakanoagency', 
    class: 'fa-brands fa-facebook-f' 
  },
  { 
    name: 'linkeding',
    url: 'https://www.linkedin.com/company/bakano-agency/',
    class: 'fa-brands fa-linkedin-in' 
  },
  { 
    name: 'tiktok',
    url: 'https://www.tiktok.com/@bakano.agency?_t=8jfKHtOoJxW&_r=1', 
    class: 'fa-brands fa-tiktok social-img-tiktok' 
  },
]
</script>

<template>
  <div>
    <CrushFooter 
      :logoSrc="BakanoLogotipoNegro">
      <template #footer-links>
        <div class="bk-footer-privacy">
          <NuxtLink to="/terminos-y-condiciones-de-uso" class="bk-footer-copy-link">
            Términos y condiciones de uso
          </NuxtLink>
          <NuxtLink to="/politica-de-privacidad" class="bk-footer-copy-link">
            Política de privacidad
          </NuxtLink>
        </div>
      </template>
      <template #social-icons>
        <NuxtLink 
          v-for="icon in socialIcons" 
          :key="icon.name" 
          :to="icon.url" 
          target="_blank"
          external
          :aria-label="'Red social de bakano:' + icon.name">
          <i 
            :class="icon.class"
            class="social-img">
          </i>
        </NuxtLink>
      </template>
    </CrushFooter>
  </div>
</template>

<style lang="scss" scoped>
.social-img{
  font-size: 32px;
  color: $black;
}
.bk-footer-privacy{
  display: flex;
  justify-content: center;
  gap: 16px;
}
.bk-footer-copy-link{
    font-family: $primary-font;
    color: $black;
    text-decoration: none;
    font-size: .95rem;
    font-weight: $font-weight-bold;
    &:hover{
      color: $pink
    }
  }
:deep(.footer){
  max-width: none;
  margin-top: 32px;
}
:deep(.footer-social){
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

}
:deep(.footer-image){
  overflow: hidden;
  aspect-ratio: 1001/174;
  max-width: none;
  height: 48px;
}
</style>