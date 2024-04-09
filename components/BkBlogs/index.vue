<script setup lang="ts">
import BlogService from '~/services/BlogService';

const authorInfo = ref<any[]>([]);
const authors = ['yeyodev', 'denisse', 'luis-reyes', 'dayanara'];
const orderedPosts = computed(() => {
  return authorInfo.value.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
});

Promise.all(authors.map((authorName: string) => BlogService.fetchAuthorInfo(authorName, authorInfo)));
</script>

<template>
  <div class="container-blog">
    <LandingPageHeader />
    <section class="blog">
      <h1 class="blog__title">
        Blogs Bakanos
      </h1>
    </section>
    <div class="blog__model__container">
      <BkBlogsModel 
        v-for="(info, index) in orderedPosts" 
        :key="index" 
        :id="info.id" 
        :title="info.title"
        :img="info.feature_image" 
        :paragraph="info.excerpt" 
        :authorImg="info.authorImage"
        :authorName="info.authorName" 
        :date="info.published_at" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.header) {
  background-color: $pink;
}
.blog {
  text-align: center;
  margin-bottom: 80px;
  &__title {
    font-family: $primary-font;
    font-size: 14vw;
    padding: 20px;
    border-bottom: 1px solid $black;
  }
}
.blog__model__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 96%;
  margin: 0 auto 48px;
  @media (max-width: $tablet-lower-breakpoint) {
    flex-direction: column;
  }
}
</style>