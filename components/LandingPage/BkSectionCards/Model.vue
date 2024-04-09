<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  BkColor: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <article class="article">
    <i 
      :class="image"
      :style="{color: BkColor}"></i>
    <h3 
      :style="{color: BkColor}"
      class="article-title">
        {{ title }}
    </h3>
    <span class="article-subtitle">
      {{ subtitle }}
    </span>
    <p class="article-paragraph">
      {{ paragraph }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff8f8;
  @media (min-width: $tablet-upper-breakpoint){
    max-width: 40%;
    margin: 0;
  }
  i {
    font-size: 24px;
  }
  &-title {
    font-family: $primary-font;
    font-size: 1.5rem;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 1.8rem;
    }
  }
  &-subtitle {
    font-family: $secondary-font;
    font-size: 1rem;
    font-weight: 700;
  }
  &-paragraph {
    font-family: $secondary-font;
    font-size: .9rem;
    max-width: 50ch;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 1rem;
      max-width: 45ch;
    }
  }
}
</style>