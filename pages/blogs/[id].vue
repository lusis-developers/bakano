<script setup lang="ts">
import ReduceDate from '~/utils/ReduceDate'

const route = useRoute();
const postDetail = ref<null | any>(null);

async function getPostByUuid(id: string) {
  try {
    const response = await fetch(`https://codigoencasa.com/ghost/api/content/posts/${id}/?key=98e5e527610957edcc5aecf066&include=authors`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const post = data.posts.map((blog: any) => {
      return {
        title: blog.title,
        feature_image: blog.feature_image,
        id: blog.id,
        excerpt: blog.excerpt,
        published_at: blog.published_at,
        authorName: blog.authors[0].name,
        authorImage: blog.authors[0].profile_image,
        html: blog.html
      };
    });
    postDetail.value = post[0];
  } catch (error) {
    console.error('An error occurred while fetching the post:', error);
  }
}

onMounted(async () => {
  await getPostByUuid(route.params.id as string);
});
</script>

<template>
  <div class="container">
    <div class="blog">
      <div class="blog__author">
        <h1 class="blog__author__title">
          {{ postDetail?.title }}
        </h1>
        <div class="blog__author__info">
          <img 
            :src="postDetail?.authorImage" 
            alt="author-img" 
            class="blog__author__info__img">
          <div class="blog__author__info-paragraphs">
            <p>
              {{ postDetail?.authorName }}
            </p>
            <p>
              {{ ReduceDate(postDetail?.published_at) }}
            </p>
          </div>
        </div>
      </div>
      <div 
        v-html="postDetail?.html" 
        class="blog__container" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  background-color: $white;
}
.blog {
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  gap: 120px;
  &__container {
    font-family: $secondary-font;
    width: 60%;
    margin: 80px auto;
  }
}
.blog__author {
  position: sticky;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 80px 40px;
  border-right: 1px solid $black;
  &__title{
  font-family: $primary-font;
  font-size: 2.5rem;
  color: $black;
  }
  &__info{
  font-family: $secondary-font;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
    &__img{
      border-radius: 50%;
      width: 40%;
      min-width: 144px;
      margin: 0;
      min-height: 144px;
      object-fit: cover;
    }
  }
}
:deep(p) {
  font-size: $font-size-normal;
  margin-bottom: 20px;
}
:deep(h3){
  font-size: $font-size-large;
  color: $black;
}
:deep(pre) {
  overflow-x: auto;
  margin: 20px 0;
  padding: 20px;
  max-width: 100%;
  border: 0;
  color: #e5eff5;
  font-size: .875rem;
  line-height: 1.6em;
  background: #2a3644;
  border-radius: 5px;
}
:deep(a){
  color: $black;
  font-weight: $font-weight-bold;
}
:dee(code, pre) {
  font-family: Space Mono, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
:deep(figcaption, cite) {
  color: $black;
  display: block;
  font-feature-settings: "liga" on, "lnum" on;
  font-size: .875rem;
  font-style: normal;
  font-weight: $font-weight-bold;
  letter-spacing: 0;
  line-height: 1.4;
  margin-top: .625rem;
  margin-bottom: 1rem;
  outline: 0;
  text-align: center;
  width: 100%;
}
:deep(img) {
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  display: block;
}
:deep(.story-social-cta) {
  display: none;
}
:deep(.kg-embed-card) {
  display: none;
}
:deep(blockquote:not(.pullquote)) {
  border-left: .25rem solid;
  color: $black;
  font-size: 1.375rem;
  line-height: 1.5;
  margin: 2rem 0 2rem -1.5rem;
  padding-bottom: .125rem;
  padding-left: 1.25rem;
}
</style>
