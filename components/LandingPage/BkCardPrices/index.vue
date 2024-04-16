<script setup lang="ts">
import { cardPrice1, cardPrice2 } from '~/utils/LandingCardPrices';
</script>

<template>
  <div class="section-prices">
    <div class="section-prices__content">
      <LandingPageBkCardPricesModel
        :title="cardPrice1.title"
        :price="cardPrice1.price"
        :description="cardPrice1.description"
        :features="cardPrice1.features" />
      <LandingPageBkCardPricesModel
        :title="cardPrice2.title"
        :price="cardPrice2.price"
        :description="cardPrice2.description"
        :features="cardPrice2.features"
        :darkColor="true" />
    </div>
  </div>
</template>

<style lang="scss"scoped>
.section-prices{
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  padding: 20px;
}
.section-prices__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (min-width: $tablet-upper-breakpoint){
    flex-direction: row;
    justify-content: center;
  }
}
</style>