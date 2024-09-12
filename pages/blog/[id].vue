<script setup lang="ts">
import { richTextResolver } from '@storyblok/richtext'

import { useBlogStore } from '#imports';
import ReduceDate from '~/utils/ReduceDate'

import type { PostContent } from '~/interfaces/Posts.interface';

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    {
      name: 'description',
      content: 'Blog de interés sobre Marketing Digital, Diseño Web, Publicidad en Redes Sociales, SEO, SEM'
    }
  ],
});

const blogStore = useBlogStore();

const postDetail = ref<PostContent | null>(null);
const formattedDate = computed(() => {
  if (postDetail.value) {
    return ReduceDate(postDetail.value.date);
  }
  return '';
});
const richtext = richTextResolver({
  optimizeImages: {
    width: 320,
    height: 320
  }
});
const content = computed(() => richtext.render(postDetail.value?.content as any));

onBeforeMount(async () => {
  postDetail.value = await blogStore.getStoryById(useRoute().params.id as string);
  if(postDetail.value === null){
    return useRouter().push('/404');
  }
});
</script>

<template>
  <Head>
    <Title>BAKANO | {{ postDetail?.title }}</Title>
  </Head>
  <div 
    v-if="postDetail"
    class="container">
      <div class="blog">
        <img 
          :src="postDetail.img[0].filename" 
          alt="author-img" 
          class="blog__img">
        <div class="blog__wrapper">
          <div class="blog__wrapper__content">
            <h1 class="blog__wrapper__content__title">
              {{ postDetail?.title }}
            </h1>
            <div class="blog__wrapper__content__details">
              <p class="blog__wrapper__content__title-name">
                <span class="title">Autor: </span>
                {{ postDetail?.authors[0] }}
              </p>
              <p class="blog__wrapper__content__title-date">
                <span class="title">
                  Fecha de publicación: 
                </span>
                {{ formattedDate }}
              </p>
            </div>
            <p class="blog__wrapper__content__description">
              {{ postDetail.description }}
            </p>
            <div class="blog__wrapper__content__body">
              <div
                v-html="content"
                class="rich-text" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  margin: auto;
  font-family: $primary-font;

  .blog {
    position: relative;
    max-width: $desktop-lower-breakpoint;
    width: 100%;
    margin: 0 auto;
    padding: 8px;
    background: rgba( 255, 255, 255, 0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 19px );
    -webkit-backdrop-filter: blur( 19px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  
    &__img {
      width: 100%;
      object-position: top;
      object-fit: cover;
      height: 420px;
      border-radius: 8px;
    }

    &__wrapper {

      &__content {
        width: 100%;
        padding: 16px;
        margin-top: -120px;
        background: rgba( 255, 255, 255, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 17.5px );
        -webkit-backdrop-filter: blur( 17.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
  
        &__title {
          text-align: center;
          margin-bottom: 24px;
        }

        &__description {
          text-decoration: underline;
          font-style: italic;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        &__details {
          padding: 0 12px;
          margin-bottom: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          
          .title {
            font-weight: $font-weight-bold;
          }
        }
        &__title-date,
        &__title-name {
          font-size: 1.125rem;
        }
        &__body {
          line-height: 2;
        }
      }
    }

  }
}
</style>