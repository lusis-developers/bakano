<script setup lang="ts">
import ReduceDate from '~/utils/ReduceDate';

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
</script>

<template>
  <nuxt-link
    to="/"
    class="wrapper">
    <article
      :class="['article', { 'is-main': props.isMain }]">
      <figure class="article__figure">
        <img
          :src="img"
          alt="blog-img"
          class="figure__img">
      </figure>
      <div class="article__content">
        <h2
          class="article__content__title">
          {{ title }}
        </h2>
        <p class="article__content__description">{{ description }}</p>
        <div class="article__content__author">
          <div class="author">
            <p class="author-name">Autor: {{ authors }}</p>
            <p class="author-date">{{ ReduceDate(date) }}</p>
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
  width: 100%;

  .article {
    width: 100%;
    margin: auto;
    padding: 4px;
    max-width: 320px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(16px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

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
      width: 100%;
      margin: 12px auto;
      display: flex;
      flex-direction: column;
      align-content: center;

      &__description {
        margin: 8px 0;
        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &__author {
        .author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }

  .is-main {
    max-width: $tablet-upper-breakpoint;
    flex-direction: row;
    height: 100%;

    .article {
      display: flex;
      flex: 1;

      &__figure {
        max-width: 280px;
        border-radius: 8px;

        .figure__img {
          border-radius: 8px 0 0 8px;
          object-fit: cover;
          width: 100%;
        }
      }

      &__content {
        height: 100%;
        flex: 1;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
  }
}
</style>
