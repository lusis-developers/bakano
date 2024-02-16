<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: false
  },
  content: {
    type: Array<{ 
      image?: string,
      title: string,
      paragraph: string
    }>,
    validator: (value: Array<{ 
      image?: string,
      title: string,
      paragraph: string
    }>) => {
      return value.every((item) => 
        typeof item.title === 'string' && 
        typeof item.paragraph === 'string' && 
        (item.image ? typeof item.image === 'string' : true));
    },
    required: true
  },
  sectionIdentifier:{
    type: String,
    required: true
  },
  showButton:{
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section 
    :class="'section-' + sectionIdentifier" 
    class="section"> 
      <div class="content">
        <h1 class="content-title">
          {{ title }}
        </h1>
        <p 
          v-if="paragraph" 
          class="content-paragraph">
            {{ paragraph }}
        </p>
      </div>
      <div 
        :class="'flex-content-' + sectionIdentifier" 
        class="flex-content">
          <div 
            v-for="(item, index) in content" 
            :key="index" 
            class="flex-items">
              <img 
                v-if="item.image" 
                :src="item.image" 
                alt="grid-img" 
                class="img" />
              <h3 
                :class="'flex-item-tittle-' + sectionIdentifier" 
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
.img {
  max-width: 72%;
}
.section {
  padding: 24px;
  margin: 32px 0;
  @media (min-width: $tablet-upper-breakpoint) {
    padding: 100px 0;
    margin: 72px auto;
  }
  &-2 {
    background-color: rgba(253, 231, 231, 0.35);
  }
}
.content {
  text-align: center;
  &-title {
    font-family: $primary-font;
    margin-bottom: 64px;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $font-size-extra-large;
      max-width: 80%;
      margin: 0 auto 56px;
    }
  }
  &-paragraph {
    font-family: $secondary-font;
    margin: 48px 0;
    @media (min-width: $tablet-upper-breakpoint) {
      max-width: 80%;
      margin: 40px auto 72px;
    }
    @media (min-width: $desktop-upper-breakpoint) {
      max-width: 64%;
    }
  }
}
.flex-content {
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
  &-2 {
    max-width: 80vw;
    margin: 0 auto;
    gap: 140px 56px;
  }
}
.flex-items {
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
.flex-item {
  &-tittle {
    font-family: $primary-font;
    &-1 {
      font-size: $font-size-extra-large;
      color: #ed143d;
    }
  }
  &-paragraph {
    font-family: $secondary-font;
    max-width: 72%;
  }
}
</style>