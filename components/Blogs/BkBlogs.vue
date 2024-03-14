<script setup lang="ts">
import BlogData from '~/data/blogs';

const DataBlogs = new BlogData();
const allAuthorInfo = ref<any[]>([]);
const esentialInfoPosts = ref<any[]>([]);
const blogsParagraph = ref<any[]>([]);

async function getAuthorsInfo(...authors: string[]) {
  for (const author of authors) {
    const data = await DataBlogs.getAuthorsInfo(author).then((data) => {
      console.log(data, author);
      allAuthorInfo.value.push(...data);
      console.log(allAuthorInfo.value, 'AllauthorInfo');
    });
  }
}
async function getInfoFilteredByAuthor(...authors: string[]) {
  for (const author of authors) {
    const data = await DataBlogs.getInfoFilteredByAuthor(author).then((data) => {
      console.log(data, author);
      esentialInfoPosts.value.push(...data);
      console.log(esentialInfoPosts.value, 'esentialInfoPosts');
    });
  }
}

async function getParagraphs(...authors: string[]) {
  for (const author of authors) {
    let authorParagraph = ref<any>('');
    const data = await DataBlogs.getAllInfoFilteredByAuthor(author).then((data) => {
      console.log(data, author);
      authorParagraph.value = data.map((blog: any) => blog.excerpt);
      blogsParagraph.value.push(authorParagraph.value);
      console.log(blogsParagraph.value, 'blogsParagraph');
    });
  }
}

onBeforeMount(async () => {
  await getAuthorsInfo('yeyodev', 'denisse', 'luis-reyes', 'dayanara');
  await getInfoFilteredByAuthor('yeyodev', 'denisse', 'luis-reyes', 'dayanara');
  await getParagraphs('yeyodev', 'denisse', 'luis-reyes', 'dayanara');
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
      <BlogsModel 
        v-for="info in esentialInfoPosts"
        :key="info.uuid" 
        :title="info.title"
        :img="info.feature_image"
        :author-img="allAuthorInfo[0]?.profile_image"
        :author-name="allAuthorInfo[0]?.name" />
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