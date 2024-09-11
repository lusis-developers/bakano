<script setup lang="ts">
import useBlogStore from '~/stores/BlogStore';

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

const posts = computed(() => blogStore.blogs);

onMounted(async () => {
  await blogStore.getStories();
})
</script>

<template>
  <div class="container">
    <template v-if="!posts.length">
      cargando
    </template>
    <template v-else>
      <div class="container-posts">
        <div class="full-width">
          <!-- <BlogsCard
            :id="posts[0]._uuid"
            :title="posts[0].title"
            :description="posts[0].description"
            :authors="posts[0].authors"
            :img="posts[0].img[0].filename"
            :date="posts[0].date"
            :isMain="true" /> -->
        </div>
        <BlogsCard
          v-for="(post, index) in posts"
          :key="index"
          :id="post._uuid"
          :title="post.title"
          :description="post.description"
          :authors="post.authors"
          :img="post.img[0].filename"
          :date="post.date" />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-image: url('../../assets/images/cool-background.svg');
  background-position: center;
  background-size: cover;
  
  &-posts {
    max-width: $desktop-lower-breakpoint;
    margin: auto;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .full-width {
      grid-column: span 3;
    }

    @media (max-width: $tablet-upper-breakpoint) {
      grid-template-columns: repeat(2, 1fr);

      .full-width {
        grid-column: span 2;
      }
    }

    @media (max-width: $mobile-upper-breakpoint) {
      grid-template-columns: 1fr;

      .full-width {
        grid-column: span 1;
      }
    }
  }

}
</style>