<script setup lang="ts">
import { section1 } from '@/utils/LandingContent';
</script>

<template>
  <section class="section"> 
    <div class="content">
      <h2 class="content-title">
        {{ section1.title }}
      </h2>
    </div>
    <div class="flex-content">
      <div 
        v-for="(item, index) in section1.content" 
        :key="index" 
        class="flex-items">
          <h3 class="flex-item-tittle flex-item-tittle-1">
            {{ item.title }}
          </h3>
          <p class="flex-item-paragraph">
            {{ item.paragraph }}
          </p>
      </div>
    </div>
    <GlobalBkButton />
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 24px;
  margin: 32px 0;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 72px auto;
  }
}
.content {
  text-align: center;
  &-title {
    font-family: $primary-font;
    margin-bottom: 64px;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;
      max-width: 80%;
      margin: 0 auto 56px;
    }
  }
  &-paragraph {
    font-family: $secondary-font;
    margin: 48px 0;
    @media (min-width: $tablet-upper-breakpoint) {
      max-width: 80%;
      margin: 40px auto 72px;
    }
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 64%;
    }
  }
}
.flex-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 80px;
  @media (min-width: $tablet-upper-breakpoint) {
    justify-content: space-around;
  }
  @media (min-width: $desktop-lower-breakpoint) {
    max-width: 80%;
    gap: 24px;
    margin: 0 auto;
  }
}
.flex-items {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 100%;
  @media (min-width: $tablet-upper-breakpoint) {
    flex: 1 0 calc(50% - 16px);
  }
  @media (min-width: $desktop-lower-breakpoint) {
    flex: 1 0 calc(33% - 16px);
  }
}
.flex-item {
  &-tittle {
    font-family: $primary-font;
    &-1 {
      font-size: $font-size-extra-large;
      color: #ed143d;
    }
  }
  &-paragraph {
    font-family: $secondary-font;
    max-width: 72%;
  }
}
</style>