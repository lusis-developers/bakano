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
const mail = 'mailto:correo@ejemplo.com?subject=Consulta%20sobre%20sus%20servicios&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.';
const whatsapp = 'https://wa.me/593995298404?text=Hola,%20quiero%20un%20chatbot%20para%20mi%20negocio.'

function getYear(): number {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}
</script>

<template>
  <div>
    <div class="footer-info">
      <div class="footer-info-container crush-container">
        <div class="left">
          <h2>
            Hablemos.
          </h2>
          <h3>
            Empcemos a crecer tu negocios juntos.
          </h3>
        </div>
        <div class="right">
          <a
            :href="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="item">
            <i class="fa-brands fa-whatsapp icon" />
            <div class="contact">
              <span class="title">
                Chateemos por WhatsApp
              </span>
              <span class="info">
                +593 99 529 8404
              </span>
            </div>
          </a>
          <a
            :href="mail"
            target="_blank"
            rel="noopener noreferrer"
            class="item">
            <i class="fa-regular fa-envelope-open icon"></i>
            <div class="contact">
              <span class="title">
                Escríbenos
              </span>
              <span class="info">
                dquimi@bakano.ec
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <CrushFooter :logoSrc="'null'">
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
.footer-info  {
  width: 100%;
  background-color: $black;
  padding: 36px 16px;
  color: white;
  font-family: $primary-font;

  &-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 36px;

    .left {
      width: 100%;
      @media(min-width: $desktop-lower-breakpoint) {
        width: 40%;
      }
    }
    .right {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      @media(min-width: $desktop-lower-breakpoint) {
        width: 50%;
        justify-content: flex-start;
      }

      .item {
        width: 100%;
        display: flex;
        gap: 12px;
        text-decoration: none;
        cursor: pointer;
        @media(min-width: $desktop-lower-breakpoint) {
          padding: 12px;
          width: 40%;
        }

        .icon {
          color: $pink;
          font-size: 24px;
        }
       
        .contact  {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .title {
            color: $white;
          }

          .info {
            color: $pink;
          }
        }
      }
    }
  }
}

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