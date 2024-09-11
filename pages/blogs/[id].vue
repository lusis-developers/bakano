<script setup lang="ts">
import { useBlogStore } from '#imports';
import ReduceDate from '~/utils/ReduceDate'

import type { PostContent } from '~/interfaces/Posts.interface';

const postDetail = ref<PostContent | null>(null);

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

const formattedDate = computed(() => {
  if (postDetail.value) {
    return ReduceDate(postDetail.value.published_at);
  }
  return '';
});

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
        <div class="blog__content">
          <h1 class="blog__author__title">
            {{ postDetail?.title }}
          </h1>
          <div class="blog__author__info">
            <div class="blog__author__info__paragraphs">
              <!-- <p class="blog__author__info__paragraphs-name">
                {{ postDetail?.authorName }}
              </p> -->
              <p class="blog__author__info__paragraphs-date">
                {{ formattedDate }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-image: url('../../assets/images/bg-abstract.png');
  object-position: center;
  object-fit: cover;
  padding: 24px;
  margin: auto;
  .blog {
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
  }
}
</style>