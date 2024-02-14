<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
</script>

<template>
  <div class="button-container">
    <CrushButton 
      :small=true 
      text="Solicita información" 
      variant="alert">
        <a 
          href="#form" 
          class="button-link">
            Solicita información
        </a>
    </CrushButton>
  </div>
</template>

<style lang="scss" scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  .button-link {
    text-decoration: none;
    color: $black;
  }
  :deep(.crush-button) {
  border: none;
  color: $black;
  background-color: hsla(344, 79%, 53%, .4);
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
</style>