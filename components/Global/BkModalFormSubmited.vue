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
  padding: 4px 16px;
  border-radius: 24px;
  position: fixed;
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
  @media (min-width: $tablet-upper-breakpoint) {
    width: 52vw;
  }
  @media (min-width: $desktop-upper-breakpoint) {
    width: 32vw;
  }
  &-logo {
    max-width: 30%;
    height: 85%;
    object-fit: contain;
    @media (min-width: $tablet-upper-breakpoint) {
      width: 12%;
    }
  }
  &-tittle {
    font-family: $primary-font;
    font-size: $font-size-normal;
    margin-bottom: 2px;
    text-align: center;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-large;
    }      
  }
  &-subtittle {
    font-family: $secondary-font;
    font-size: $font-size-small;
    text-align: center;
  }
}

.slide-in-down-enter-active {
  transition: all 0.3s ease;
}
.slide-in-down-enter-from {
  transform: translateY(-100%);
}
.slide-in-down-enter-to {
  transform: translateY(0);
}
.slide-in-down-leave-active {
  transition: all 0.3s ease;
}
.slide-in-down-leave-from {
  transform: translateY(0);
}
.slide-in-down-leave-to {
  transform: translateY(-100%);
}
</style>