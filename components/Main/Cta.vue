<template>
  <div class="card-principal">
    <h2 class="card-principal-title">
      Impulsa tu empresa y mejora tus servicios con Chatbots Inteligentes
    </h2>
    <h3 class="card-principal-subtitle">
      Creamos conversaciones personalizadas, atractivas e inteligentes, para mejorar la experiencia de tu cliente, potenciando la conversión y preferencia.
    </h3>
    <GlobalBkButton/>
  </div>
</template>

<style lang="scss">
.card-principal {
  width: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url('@/assets/Cta/agencia.jpg');
  background-size: cover;
  background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(217, 197, 197, 0.563); 
    backdrop-filter: blur(5px);
    filter: grayscale(100%) brightness(50%);
  }
  &-title {
    font-family: $primary-font;
    color: $pink;
    font-size: $font-size-extra-large;
  }
  &-subtitle {
    font-family: $primary-font;
    font-weight: normal;
    color: $white;
    font-weight: bold;
    font-size: $font-size-large;
  }
  &-title, &-subtitle {
    z-index: 1; 
    font-family: $primary-font;
    text-align: center;
  }
}
</style>