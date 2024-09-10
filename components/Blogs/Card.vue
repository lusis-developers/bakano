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
</style>