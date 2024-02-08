<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';

const props = defineProps({
  showCarousel: { 
    type: Boolean, 
    default: false 
  },
  images:{
    type: Array,
    required: false
  },
  showForm: {
    type: Boolean,
    default: false
  },
  showButton: {
    type: Boolean,
    default: false
  },
  gridSection: {
    type: Object,
    required: false
  },
  contentSection: {
    type: Object,
    required: true
  }
});
</script>


<template>
  <section class="section" :class="props.contentSection[0].sectionClass.class">
    <div class="section-content" :class="props.contentSection[0].sectionClass.classContent">
      <h2 class="section-tittle" :class="props.contentSection[0].sectionClass.classTitle">{{ contentSection[0].title }}</h2>
      <p class="section-paragraph" :class="props.contentSection[0].sectionClass.classParagraph">{{ contentSection[0].content }}</p>
    </div>

    <div class="section-grid" v-if="gridSection">
      <div class="section-item" v-for="(item, index) in gridSection" :key="index">
        <img :src="item.image" alt="grid-img" class="img" v-if="item.image">
        <h3 class="section-item-tittle">{{ item.title }}</h3>
        <p class="section-item-paragraph">{{ item.content }}</p>
      </div>
    </div>

    <LandingPageCarousel v-if="showCarousel" :images="(images as Array<string>)" />
    <LandingPageForm v-if="showForm" />
    <div class="button" v-if="showButton">
      <CrushButton  
      :small=true 
      text="Solicita información" 
      variant="alert">
      <slot name="link"></slot>
    </CrushButton>  
    </div>
  </section>
</template>

<style scoped lang="scss">
.img{
  max-width: 100%;
}
.section{
  padding: 24px;
  margin-bottom: 30px;
  &-tittle{
    font-family: $primary-font;
    text-align: center;
    margin-bottom: 15px;
  }
  &-paragraph{
    font-family: $secondary-font;
    margin-bottom: 30px;
    text-align: center;
  }
  &-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  &-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    &-tittle{
      font-family: $primary-font;
      text-align: center;
    }
    &-paragraph{
      font-family: $secondary-font;
      text-align: center;
    }
  }
}

.section1{
  @media (min-width: 768px){
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
  }
}

.section2{
  @media (min-width: 768px){
    background-color: pink;
  }
}

// .section5{
//   @media (min-width: 768px){
//     display: flex;
//     justify-content: space-between;
//     max-width: 80%;
//     margin: 0 auto;
//   }
// }

.button{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.section-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

:deep(.register-wrapper-card){
  max-width: 100%;
}
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
  // border-radius: 20px;
  padding: 12px;
  border: 1.5px solid #8b888e;
}
:deep(.crush-text-field .input-container.active) {
  border-color: grey;
}
:deep(.crush-text-field) {
  @media (max-width: $mobile-upper-breakpoint) {
    margin-bottom: 8px;
  }
}
</style>
