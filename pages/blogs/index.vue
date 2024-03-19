<script setup lang="ts">
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
})
</script>

<template>
  <div class="container">
    <BkBlogs />
  </div>
</template>

<style lang="scss" scoped>
.container{
  min-height: 100vh;
}
</style>