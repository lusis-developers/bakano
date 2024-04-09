<script setup lang="ts">
</script>

<template>
  <section class="section">
    <h2 class="section-title">
      Forma parte de los que aman <strong class="section-title-strong">FUDIBOT</strong>. Presentes en Latam y en Europa. 
    </h2>
  </section>
</template>

<style lang="scss" scoped>
.section{
  margin: 80px 0;
  min-height: 50vh;
  background-color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  &-title{
    padding-inline: 20px;
    text-align: center;
    font-family: $primary-font;
    color: #fff;
    margin-bottom: 40px;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: $font-size-extra-large;
      max-width: 80%;
      margin: 40px auto;
    }
  }
}
</style>