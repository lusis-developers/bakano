<script setup lang="ts">
const authorInfo = ref<any[]>([]);
const orderedPosts = computed(() => {
  return authorInfo.value.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
});  

async function fetchAuthorInfo(authorName: string) {
  const response = await fetch(`https://codigoencasa.com/ghost/api/content/posts/?key=98e5e527610957edcc5aecf066&include=authors&filter=authors.slug:${authorName}`);
  const data = await response.json();
  data.posts.filter((blog: any) => {
    authorInfo.value.push({
      title: blog.title,
      feature_image: blog.feature_image,
      id: blog.id,
      excerpt: blog.excerpt,
      published_at: blog.published_at,
      authorName: blog.authors[0].name,
      authorImage: blog.authors[0].profile_image
    });
  });
}

onMounted(async() => {
  await fetchAuthorInfo('yeyodev');
  await fetchAuthorInfo('denisse');
  await fetchAuthorInfo('luis-reyes');
  await fetchAuthorInfo('dayanara');
});
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
        :author-img="info.authorImage"
        :author-name="info.authorName"
        :date="info.published_at" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.header){
    background-color: $pink;
  }
  .blog{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 56px;
    margin-bottom: 80px;
    &__title{
      font-family: $primary-font;
      font-size: 14vw;
      padding: 20px;
      border-bottom: 1px solid $black;
    }
  }
  .blog__model__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    max-width: 96%;
    margin: 0 auto 48px;
  }
</style>