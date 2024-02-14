<script setup lang="ts">
const props = defineProps({
  principalContent: {
    type: Object,
    required: true
  },
  numeralSection: {
    type: String,
    required: true
  },
  flexContent: {
    type: Object,
    required: true
  },
  showButton: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
<section
:class="'section-' + numeralSection"
class="section"> 
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
  :class="'flex-content-' + numeralSection"
  class="flex-content">
    <div 
    v-for="(item, index) in flexContent"
    :key="index"
    class="flex-items">
      <img 
        v-if="item.image"
        :src="item.image"
        alt="grid-img"
        class="img" />
      <h3
        :class="'flex-item-tittle-' + numeralSection"
        class="flex-item-tittle">
        {{ item.title }}
      </h3>
      <p
        class="flex-item-paragraph">
        {{ item.paragraph }}
      </p>
    </div>
  </div>
  <GlobalBkButton v-if="showButton" />
</section>
</template>

<style lang="scss" scoped>
.img{
  max-width: 72%;
}
.section{
  padding: 24px;
  margin: 32px 0;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 72px auto
  }
  &-2{
    background-color: hsla(0, 86%, 95%, 0.35);
  }
}
.content{
  text-align: center;
  &-title{
    font-family: $primary-font;
    margin-bottom: 64px;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: $font-size-extra-large;
      max-width: 80%;
      margin: 0 auto 56px;
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    margin: 48px 0;
    @media (min-width: $tablet-upper-breakpoint){
      max-width: 80%;
      margin: 40px auto 72px;
    }
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 64%;
    }
  }
}
.flex-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 80px;
  @media (min-width: $tablet-upper-breakpoint) {
    justify-content: space-around;
  }
  @media (min-width: $desktop-lower-breakpoint) {
    max-width: 80%;
    gap: 24px;
    margin: 0 auto;
  }
  &-2{
    max-width: 80vw;
    margin: 0 auto;
    gap: 140px 56px;
  }
}
.flex-items{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 100%;
  @media (min-width: $tablet-upper-breakpoint) {
    flex: 1 0 calc(50% - 16px);
  }
  @media (min-width: $desktop-lower-breakpoint) {
    flex: 1 0 calc(33% - 16px);
  }
}
.flex-item{
  &-tittle{
    font-family: $primary-font;
    &-1{
      font-size: $font-size-extra-large;
      color: #ed143d;      
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    max-width: 72%;
  }
}
</style>