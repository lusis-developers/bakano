<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';

const scrollToForm = (event: MouseEvent) => {
  event.preventDefault();
  const formElement = document.getElementById('form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div class="button-container">
    <CrushButton 
      :small=true 
      text="Solicita información" 
      variant="alert"
      @click="scrollToForm">
        <a 
          href="#form" 
          class="button-link">
            Lo quiero >>
        </a>
    </CrushButton>
  </div>
</template>

<style lang="scss" scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0;
  }
  .button-link {
    text-decoration: none;
    color: #fff;
  }
  :deep(.crush-button) {
  border: none;
  color: $black;
  background-color: $pink;
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
  &:hover {
    background-color: darken($pink, 10%);
  }
}
</style>