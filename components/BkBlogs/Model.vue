<script setup lang="ts">
import ReduceDate from '~/utils/ReduceDate'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  authorName: {
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
});

function getPosts(id:string){
  useRouter().push(`/blogs/${id}`);
}
</script>

<template>
  <article class=article__blog>
    <figure 
      class="article__figure"
      @click="getPosts(id || '')">
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
        {{ paragraph }}
      </p>
      <div class="article__author">
        <div 
          class="article__author__link">
            <img 
              :src="authorImg" 
              :alt="authorName+' foto'" 
              class="article__author__img">
        </div>
        <div class="article__author__content">
          <p class="article__author__content-name">
            {{ authorName }}
          </p>
          <p class="article__author__content-date">
            {{ ReduceDate(date ?? '') }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.article__blog{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 calc(33.333% - 48px);
  max-width: calc(33.333% - 48px);
  padding: 40px 25px 17px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .03);
  @media (max-width: $tablet-upper-breakpoint) {
    flex: auto;
    max-width: 560px;
    margin: 0 auto;
  }
  @media (max-width: $mobile-upper-breakpoint) {
    max-width: 100%;
  }
  @media (min-width: $tablet-upper-breakpoint) and (max-width: $desktop-upper-breakpoint) {
    flex: 1 0 calc(50% - 48px);
    max-width: calc(50% - 48px);
  }
    .article__figure{
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    .figure__img{
      width: 100%;
      height: 280px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .article__content{
    display: flex;
    flex-direction: column;
    max-width: 100%;
    .article__content__title{
      font-size: 24px;
      font-family: $primary-font;
      font-weight: 600;
    }
    .article__content__paragraph{
      font-family: $secondary-font;
      font-size: 16px;
      margin: 30px 0 24px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;    
    }
    .article__author{
      display: flex;
      gap: 10%;
      align-items: center;
      .article__author__link{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
.article__author__content{
  font-family: $secondary-font;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-name{
    font-size: 14px;
  }
  &-date{
    font-size: 12px;
  }
}
</style>