<script setup lang="ts">
import { section2 } from '@/utils/LandingContent';
</script>

<template>
  <section class="section">
    <h2 class="section-title">
      {{ section2.title }}
    </h2>
    <div class="section-cards">
      <LandingPageBkSectionCardsModel
        v-for="(card, index) in section2.content"
        :key="index"
        :image="card.image"
        :title="card.title"
        :subtitle="card.subtitle"
        :paragraph="card.paragraph"
        :BkColor="card.BkColor"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  margin-top: 100px;
}
.section-title{
  text-align: center;
  font-family: $primary-font;
  margin-bottom: 40px;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: $font-size-extra-large;
    max-width: 80%;
    margin: 40px auto;
  }
}
.section-cards{
  @media (min-width: $tablet-upper-breakpoint){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
}
</style>