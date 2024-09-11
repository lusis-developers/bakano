<script setup lang="ts">
import ReduceDate from '~/utils/ReduceDate'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  isMain: {
    type: Boolean,
    required: false,
    default: false
  }
});

const displayMain = computed(() => props.isMain ? 'is-main' : '');
</script>

<template>
  <nuxt-link
    to="/"
    class="wrapper">
    <article
      class=article
      :class="displayMain">
      <figure 
        class="article__figure">
          <img 
            :src="img" 
            alt="blog-img" 
            class="figure__img">
      </figure>
      <div class="article__content">
        <h2 class="article__content__title">
          {{ title }}
        </h2>
        <p class="article__content__paragraph">
          {{ description }}
        </p>
        <div class="article__author">
          <div class="article__author__content">
            <p class="article__author__content-name">
              Autor: {{ authors }}
            </p>
            <p class="article__author__content-date">
              {{ ReduceDate(date ?? '') }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.wrapper {
  text-decoration: none;
  color: $black;
  font-family: $primary-font;
  
  .article {
    width: 100%;
    max-width: 320px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 18px );
    -webkit-backdrop-filter: blur( 18px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
  
    &__figure {
      width: 100%;
      border-radius: 8px;
      
      .figure__img {
        border-radius: 8px 8px 0 0; 
        object-fit: cover;
        width: 100%;
      }
    }
  
    &__content {
      padding: 12px;
      width: 100%;
      display: grid;
      align-content: center;
    }
  }
  .is-main {
    flex-direction: row;
  }
}

</style>