<script setup lang="ts">
import BlogData from '~/data/blogs';

const DataBlogs = new BlogData();
const authorData = ref<any[]>([]);

async function getAuthorData(...authors: string[]) {
  for (const author of authors) {
    const authorInfo = (await DataBlogs.getAuthorsInfo(author)).map((author: any) => ({
      name: author.name,
      profile_image: author.profile_image,
    }));
    const essentialInfo = (await DataBlogs.getInfoFilteredByAuthor(author)).map((info: any) => ({
      title: info.title,
      feature_image: info.feature_image,
      uuid: info.uuid,
    }));
    const paragraphs = (await DataBlogs.getAllInfoFilteredByAuthor(author)).map((blog: any) => blog.excerpt);

    authorData.value.push({
      authorInfo,
      essentialInfo,
      paragraphs,
    });
    console.log(authorData.value);
  }
}

onBeforeMount(async () => {
  await getAuthorData('yeyodev', 'denisse', 'luis-reyes', 'dayanara');
  console.log(authorData.value, 'antes');
});
onMounted(() => {
  console.log('despues');
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
        v-for="(data, index) in authorData"
        :key="index" 
        :title="data.essentialInfo[0]?.title"
        :paragraph="data.paragraphs[0]"
        :img="data.essentialInfo[0]?.feature_image"
        :author-img="data.authorInfo[0]?.profile_image"
        :author-name="data.authorInfo[0]?.name" />
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