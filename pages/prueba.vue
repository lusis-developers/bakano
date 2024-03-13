<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BkBlogs from '~/components/Blogs/BkBlogs.vue';

// const html = ref(''); // Define html as a reactive variable

// onMounted(() => {
//   fetch('https://codigoencasa.com/ghost/api/content/posts/?key=98e5e527610957edcc5aecf066')
//     .then(response => response.json())
//     .then(data => {
//       const rawResponse = data;
//       html.value = rawResponse.posts[0].html; // Update the value of html
//     })
//     .catch(error => console.log(error));
// });
</script>

<template>
  <div class="container-blog">
    <BkBlogs />
    <!-- <div v-html="html"></div> -->
  </div>
</template>

<style lang="scss" scoped>
.container-blog{
  background-color: #000;
}
</style>