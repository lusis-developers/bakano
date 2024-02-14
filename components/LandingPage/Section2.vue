<script setup lang="ts">
const props = defineProps({
  principalContent: {
    type: Object,
    required: true
  },
  flexClasses: {
    type: Object,
    required: true
  },
  flexContent: {
    type: Object,
    required: true
  },
});
</script>

<template>
<section>
  <div class="content">
    <h1 class="content-title">
      {{ principalContent[0].title }}
    </h1>
    <p 
    v-if="principalContent[0].paragraph"
    class="content-paragraph">
      {{ principalContent[0].paragraph }}
    </p>
  </div>
  <div 
  :class="flexClasses.classContainer"
  class="flex-content">
    <div 
    v-for="(item, index) in flexContent"
    :class="flexClasses.classItem"
    :key="index"
    class="flex-items">
      <img 
        v-if="item.image"
        :src="item.image"
        alt="grid-img"
        class="img" />
      <h3
        :class="flexClasses.title"
        class="section-item-tittle">
        {{ item.title }}
      </h3>
      <p
        :class="flexClasses.paragraph"
        class="section-item-paragraph">
        {{ item.paragraph }}
      </p>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>

</style>

