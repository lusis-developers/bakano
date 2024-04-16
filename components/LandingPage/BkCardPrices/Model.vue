<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array<string>,
    required: true,
  },
  darkColor: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <article class="article">
    <div 
      :style="darkColor && 'background-color: #e6285c'"
      class="article__content">
        <h3 
          :style="darkColor ? 'color: #fff' : 'color: rgba(230, 40, 91, 0.65)'"
          class="article__content__title">
            {{ title }}
        </h3>
        <p
          :style="darkColor && 'color: #fff'" 
          class="article__content__paragraph">
            {{ price }}
        </p>
    </div>
    <div class="article__features">
      <p class="features__description">
        {{ description }}
      </p>
      <ul class="features__list">
        <li 
          v-for="(feature, index) in features" 
          :key="index" 
          class="features__list__item">
            {{ feature }}
        </li>
      </ul>
    </div>
    <GlobalBkButton />
  </article>
</template>

<style lang="scss" scoped>
.article{
  display: flex;
  flex-direction: column;
  border: 2px solid $pink;
  max-width: 440px;
  border-radius: 48px;
  &__content{
    padding: 8px 0;
    border-radius: 44px 44px 0 0;
    border-bottom: 2px solid $pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
      font-family: $primary-font;
      font-weight: $font-weight-bold;
      font-size: 1.5rem;
    }
    &__paragraph{
      font-family: $secondary-font;
      font-weight: $font-weight-bold;
      font-size: 1.25rem;
    }
  }
  &__features{
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
.features{
  &__description{
    font-family: $secondary-font;
    font-size: 1rem;
    font-weight: $font-weight-bold;
  }
  &__list{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__list__item{
    font-family: $secondary-font;
    font-size: 1rem;
  }
}
:deep(.button-container){
  margin: 0 0 32px;
}
</style>