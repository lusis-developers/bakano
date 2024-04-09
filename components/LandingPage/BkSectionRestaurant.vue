<script setup lang="ts">
import { section3 } from '@/utils/LandingContent';
</script>

<template>
  <section class="section">
    <div class="main">
      <h2 class="main-title">
        {{ section3.title }}
      </h2>
      <p class="main-paragraph">
        {{ section3.paragraph }}
      </p>
    </div>
    <div class="content">
      <img 
        decoding="async" 
        loading="lazy" 
        :src="section3.content.image" 
        alt="Imagen de chatbot de restaurante"
        class="content-img" 
      />
      <div class="content-main">
        <h3 class="content-main-title">
          {{ section3.content.title }}
        </h3>
        <ul class="content-main-list">
          <li 
            v-for="(item, index) in section3.content.paragraph" 
            :key="index"
            class="content-main-list-item">
              {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
}
.main{
  text-align: center;
  &-title {
    font-family: $primary-font;
    font-size: 2rem;
    margin-bottom: 1rem;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 3rem;
    }
  }
  &-paragraph {
    font-family: $secondary-font;
    margin-bottom: 1.25rem;
    max-width: 60ch;
    margin: 40px auto 20px;
    @media (min-width: $desktop-lower-breakpoint){
      max-width: 80ch;
    }
  }
}
.content{
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: $tablet-upper-breakpoint) {
    flex-direction: row;
    gap: 80px;
  }
  &-img{
    max-width: 60%;
    @media (min-width: $tablet-lower-breakpoint){
      width: 200px;
      height: 203px;
      aspect-ratio: 503/511;
    }
  }
  &-main{
    margin-top: 20px;
  }
}
.content-main{
  &-title {
    font-family: $primary-font;
    font-size: 1.5rem;
    text-align: center;
    margin: 16px 0 20px;
  }
  &-list{
    padding-inline: 20px;
  }
  &-list-item{
    font-family: $secondary-font;
    margin-bottom: 0.5rem;
  }
}
</style>