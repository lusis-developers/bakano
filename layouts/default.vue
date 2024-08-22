<script setup lang="ts">
import BkHeader from '@/components/BkHeader.vue';
import BkFooter from '@/components/BkFooter.vue';
</script>

<template>
  <div>
    <BkHeader />
    <slot />
    <BkFooter />
  </div>
</template>
