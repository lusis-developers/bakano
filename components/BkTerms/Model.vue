<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array<string>,
    required: true
  }
})
</script>

<template>
  <section class="section-terms">
    <h2 class="section-terms-title">
      {{ title }}
    </h2>
    <div class="section-terms-content">
      <p 
        v-for="(item, index) in content"
        :key="index"
        class="section-terms-content-paragraph">
          {{ item }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-terms {
  margin-bottom: 40px;
  &-title {
    font-family: $primary-font;
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
}
.section-terms-content{
  &-paragraph{
    font-family: $secondary-font;
    margin-bottom: 16px;
  }
}
</style>