<script setup lang="ts">
import BlogData from '~/data/blogs';

const DataBlogs = new BlogData();

async function getBlogsFilteredByAuthor(author: string) {
  return await DataBlogs.getBlogsFilteredByAuthor(author);
}

async function getBlogs(){
  const data = await DataBlogs.getBlogs().then((data) => {
    console.log(data, 'datafuncion');
    return data;
  })
  return data;
}


// const getBlogs = getBlogsFilteredByAuthor('65cfd4cd7c1200052428e369');

onMounted(() => {
  getBlogs()
});
</script>


<template>
<div class="container-blog">

</div>
</template>

<style lang="scss" scoped>
</style>