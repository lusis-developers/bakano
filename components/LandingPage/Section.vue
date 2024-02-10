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
  showButton: {
    type: Boolean,
    default: false
  },
  gridSection: {
    type: Object,
    required: false
  },
  gridClasses: {
    type: Object,
    required: false
  },
  contentSection: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <section 
    :class="contentSection?.[0]?.sectionClass?.class"
    class="section">
      <div 
        :class="contentSection?.[0]?.sectionClass?.classContent"
        class="section-content">
          <h2 
            :class="contentSection?.[0]?.sectionClass?.classTitle"  
            class="section-tittle">
              {{ contentSection?.[0]?.title }}
          </h2>
          <p 
            :class="contentSection?.[0]?.sectionClass?.classParagraph"
            class="section-paragraph"> 
              {{ contentSection?.[0]?.content }}
          </p>
      </div>
      <div 
        v-if="gridSection"  
        :class="gridClasses?.[0]?.classGrid" 
        class="section-grid">
          <div 
            :class="gridClasses?.[0]?.classItem" 
            class="section-item" 
            v-for="(item, index) in gridSection" 
            :key="index">
              <img 
                v-if="item.image"
                :src="item.image" 
                :class="gridClasses?.[0]?.classImage" 
                alt="grid-img" 
                class="img" />
              <h3 
                :class="gridClasses?.[0]?.classTitle"
                class="section-item-tittle">
                  {{ item.title }}
              </h3>
              <p 
                :class="gridClasses?.[0]?.classParagraph"
                class="section-item-paragraph">
                  {{ item.content }}
              </p>
          </div>
      </div>
      <LandingPageCarousel 
        v-if="showCarousel" 
        :images="(images as Array<string>)" />
          <slot name="Form"></slot>
      <div 
        v-if="showButton"
        class="button">
          <CrushButton  
            :small=true 
            text="Solicita información" 
            variant="alert">
            <NuxtLink 
                to="#form" 
                class="button-link">
                  Solicita información
            </NuxtLink>
          </CrushButton>
      </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: 24px;
  margin-bottom: 32px;
  &-tittle, &-paragraph, &-item-tittle, &-item-paragraph {
    font-family: $primary-font;
    text-align: center;
  }
  &-paragraph, &-item-paragraph {
    font-family: $secondary-font;
  }
  &-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px;
    @media (min-width: $tablet-upper-breakpoint) {
      justify-content: space-around;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 100%;
    @media (min-width: $tablet-upper-breakpoint) {
      flex: 1 0 calc(50% - 16px);
    }
    @media (min-width: $desktop-lower-breakpoint) {
      flex: 1 0 calc(33% - 16px);
    }
    &-tittle {
      margin: 24px 0 16px;
    }
  }
}
.section-paragraph{
  margin: 48px 0;
}
.img {
  max-width: 100%;
}
.section1, .section2, .section3, .section4, .section5 {
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  &-title {
    @media (min-width: $tablet-upper-breakpoint) {
      max-width: 80%;
      margin: 0 auto 48px;
      font-size: $font-size-extra-large;
    }
  }
  &-paragraph {
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-normal;
      margin: 40px auto 72px;
      max-width: 80%;
    }
    @media (min-width: $desktop-lower-breakpoint) {
      max-width: 62%;
    }
  }
  &-grid{
    @media (min-width: $desktop-lower-breakpoint) {
      max-width: 80vw;
      margin: 0 auto;
    }
    &-img{
      max-width: 72%;
    }
    &-item{
      &-paragraph{
        max-width: 72%;
      }
    }
  }
}
.section1{
  background-color: hsla(0, 10%, 92%, .35);
}
.section2-grid{
  gap: 24px;
    &-item-tittle {
      font-size: $font-size-extra-large;
      color: #ed143d; 
    }
}
.section3{
  background-color: hsla(0, 86%, 95%, 0.35);
  &-grid {
    @media (min-width: $tablet-upper-breakpoint) {
      max-width: 80vw;
      margin: 0 auto;      
      gap: 80px 48px;
    }
  }
}
.section4-grid{
  @media (min-width: $tablet-upper-breakpoint) {
    max-width: 80vw;
    margin: 0 auto;
  }
}
.section5{
  @media (min-width: $desktop-upper-breakpoint) {
    max-width: 80vw;
    display: flex;
    gap: 80px;
    justify-content: center;
  }
  &-content{
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 45%;
    }
  }
  &-paragraph{
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 100%;
    }
  }
  &-title{
    @media (min-width: $desktop-upper-breakpoint) {
     max-width: 100%;
    }
  }
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  &-link {
    text-decoration: none;
    color: $black;
  }
}
:deep(.crush-text-field .input-container .crush-text-field-input) {
  color: $black;
  @media (min-width: $tablet-upper-breakpoint) {
    font-size: $font-size-normal;
  }
}
:deep(.crush-text-field .input-container) {
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
