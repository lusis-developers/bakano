<script setup lang="ts">
import useBlogStore from '~/stores/BogStore';

useHead({
  title: 'BAKANO | Blogs',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    {
      name: 'description',
      content: 'Artículos de interés sobre Marketing Digital, Diseño Web, Publicidad en Redes Sociales, SEO, SEM'
    }
  ],
});

const blogStore = useBlogStore();

onMounted(async () => {
  console.log('blogs: ', await blogStore.getAllBlogs());
  await blogStore.getAllBlogs();
})
</script>

<template>
  <div class="container">
    <!-- <BkBlogs /> -->  

    <BkBlogsModel  
      id="1" 
      title="titulo"
      img="https://i.pinimg.com/236x/d4/60/18/d46018b5dcd5105a158cfa9b24e2f329.jpg" 
      paragraph="parrafo" 
      authorImg="https://i.pinimg.com/236x/bb/eb/a6/bbeba63f548807db592804ece5a4dde8.jpg"
      authorName="diego reyes" 
      date="ayer" />
  </div>
</template>

<style lang="scss" scoped>
.container{
  min-height: 100vh;
}
</style>