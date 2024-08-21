<template>
  <div class="container-cards">
    <div class="container-cards-principal">
      <div class="container-cards-principal-card">
        <i class="fa-solid fa-chart-simple"></i>
        <p class="container-cards-principal-card-title">
          titulo
        </p>
        <p class="container-cards-principal-card-subtitle">
          subtitulo
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-cards {
  width: 100%;
  max-width: $desktop-lower-breakpoint;
  &-principal {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    &-card {
      width: 100%;
      padding: 24px;
      @media (min-width: $tablet-upper-breakpoint) {
        max-width: 40%;
      }
      &-title {
        color: $black;
        font-size: $font-size-normal;
        font-family: $primary-font;
      }
      &-subtitle {
        color: $black;
        font-size: $font-size-normal;
        font-family: $primary-font;
      }
    }
  }
}
</style>