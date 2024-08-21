<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Solicita información'
  }
})

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
            {{ buttonText }}
        </a>
    </CrushButton>
  </div>
</template>

<style lang="scss" scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-link {
    text-decoration: none;
    color: $black;
  }
  :deep(.crush-button) {
  border: none;
  color: $black;
  background-color: rgba(230, 40, 91, 0.4);
  padding: 8px 16px;
  margin-top: 16px;
  transition: background-color 0.5s ease-in;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
  &:hover {
    background-color: darken($pink, 1%);
  }
}
</style>