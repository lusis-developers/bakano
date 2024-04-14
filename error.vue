<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

useHead({
  titleTemplate: `Error ${props.error?.statusCode}`,
  meta: [
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})
</script>

<template>
  <div class="container__error">
    <div class="error__content">
      <h1 class="content__title">
        Error {{ props.error?.statusCode }}
      </h1>
      <h2 class="content__title content__title--secondary">
        PAGINA NO ENCONTRADA
      </h2>
      <p class="content__paragraph">
        ¡Hola! Lo sentimos, pero parece que la página que buscas no existe.
        Verifica que la URL sea correcta
      </p>
      <NuxtLink 
        to="/" 
        class="content__button">
          Volver al Inicio
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error__content{
  height: 100vh;
  padding: 0 20px;
  background-color: $black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  color: #fff;
}
.content__title{
  font-family: $primary-font;
  font-size: 2.5rem;
  font-weight: 700;
  @media (max-width: $tablet-lower-breakpoint){
    font-size: 2rem;
  }
}
.content__title--secondary{
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: $tablet-lower-breakpoint){
    font-size: 1.5rem;
  }
}
.content__paragraph{
  font-family: $secondary-font;
  font-size: 1.1rem;
  font-weight: 400;
  max-width: 48ch;
  text-align: center;
  @media (max-width: $tablet-lower-breakpoint){
    font-size: 1rem;
  }
}
.content__button{
  font-family: $secondary-font;
  font-size: 1.25rem;
  font-weight: 700;
  color: $white;
  background-color: $pink;
  padding: 8px 16px;
  border: none;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.5s ease-in;
  @media (max-width: $tablet-lower-breakpoint){
    font-size: 1rem;
  }
  &:hover{
    background-color: darken($pink, 10%);
  }
}
</style>