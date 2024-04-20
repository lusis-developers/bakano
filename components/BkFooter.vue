<script setup lang="ts">
import CrushFooter from '@nabux-crush/crush-footer';
import gafas from '~/assets/images/gafas2.webp';

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

function getYear(): number {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}
</script>

<template>
  <div>
    <CrushFooter :logoSrc="gafas">
      <template #footer-links>
        <div class="bk-footer-copy">
          <i class="fa-regular fa-copyright"></i>
          <p>
            {{ getYear() }} BAKANO AGENCY
          </p>
        </div>
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
.bk-footer-copy{
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: $primary-font;
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  color: $white;
  &-link{
    font-family: $primary-font;
    color: $white;
    text-decoration: none;
    font-size: .75rem;
    font-weight: $font-weight-bold;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: 0.9rem;
    }
    &:hover{
      color: $pink
    }
  }
}
.bk-footer-privacy{
  display: flex;
  justify-content: center;
  gap: 16px;
  @media (min-width: $tablet-upper-breakpoint) {
    gap: 32px;
  }
}
.social-img{
  font-size: 24px;
  color: $white;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
}
:deep(.footer){
  max-width: none;
  background-color: $black;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0 10px;
  min-height: 100%;
  @media (max-width: $mobile-upper-breakpoint) {
    padding-bottom: 20px;
    flex-direction: column;
    gap: 16px;
  }
  align-items: center;
}
:deep(.footer-options){
  justify-content: space-between;
  @media (min-width: $tablet-upper-breakpoint) {
    width: 50%;    
  }
}
:deep(.footer-social){
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

}
:deep(.footer-image){
  display: none;
}
</style>