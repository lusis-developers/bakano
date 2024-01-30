<script setup lang="ts">
const emits = defineEmits(['closeMenu'])

onMounted(() => {
  setTimeout(() => {
    emits('closeMenu')
  }, 2000)
})
</script>

<template>
  <div class="form-submited">
    <img 
      src="@/assets/images/bakano-isotipo-negro.png" 
      class="form-submited-logo">
    <div>
      <h1 class="form-submited-tittle">
        ¡Gracias por tu interés!
      </h1>
      <p class="form-submited-subtittle">
        En breve nos pondremos en contacto contigo
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-submited {
  background-color: $white;
  color: $black;
  padding: .2rem 1rem;
  border-radius: 1.5rem;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  width: 90vw;
  height: 9vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 60vw;
  }
  @media (min-width: 1200px) {
    width: 35vw;
  }

  &-logo {
    max-width: 100%;
    height: 85%;
    object-fit: contain;
    @media (min-width: 768px) {
      width: 12%;
    }
  }

  &-tittle {
    font-family: $primary-font;
    font-size: $font-size-normal;
    margin-bottom: .1rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: $font-size-large;
    }      
  }

  &-subtittle {
    font-family: $secondary-font;
    font-size: $font-size-small;
    text-align: center;
  }

}
</style>