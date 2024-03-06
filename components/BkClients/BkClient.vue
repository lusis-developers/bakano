<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  clientUrl: {
    type: String,
    required: true
  },
})
</script>

<template>
  <a 
    :href="clientUrl" 
    :style="{backgroundColor: backgroundColor}"
    target="_blank"
    class="square">
    <img 
      :src="logo"
      loading="lazy" 
      :alt="name"/>
  </a>
</template>

<style lang="scss" scoped>
  .square {
    height: 256px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    img {
      object-fit: cover;
      height: 50%;
      width: 50%;
    }
  }
</style>