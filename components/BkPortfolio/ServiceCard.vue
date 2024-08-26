<script setup lang="ts">
import type { PropType } from 'vue';


interface Detail {
  title: string;
  detail: string;
}

const props = defineProps({
  projectType: {
    type: String as PropType<string>,
    required: true,
    default: 'CHATBOT'
  },
  projectTitle: {
    type: String as PropType<string>,
    required: true,
  },
  projectDescription: {
    type: String as PropType<string>,
    required: true,
  },
  projectSubTitle: {
    type: String as PropType<string>,
    required: true,
    default: 'Detalles del proyecto:'
  },
  details: {
    type: Array as PropType<Detail[]>,
    required: true,
  },
});
</script>

<template>
  <div class="card-project">
    <GlobalBkCard>
      <template #title>
        <h5 class="card-project-type">
          {{ projectType }}
        </h5>
        <h2 class="card-project-title">
          {{ projectTitle }}
        </h2>
      </template>
      <template #content>
        <h4 class="card-project-description">
          {{ projectDescription }}
        </h4>
        <h3 class="card-project-sub">
          {{ projectSubTitle }}
        </h3>
        <ul 
          v-for="(detail, index) in props.details"
          :key="index"
          class="card-project-list">
          <li class="card-project-list-item">
            <span class="card-project-list-item-title">
              {{ detail.title }}:
            </span>
            <span class="card-project-list-item-detail">
              {{ detail.detail }}
            </span>
          </li>
        </ul>
      </template>
    </GlobalBkCard>
  </div>
</template>

<style lang="scss" scoped>
.card-project {
  width: 100%;
  display: flex;
  flex-direction: column;
  &-type {
    color: $pink;
    font-family: $primary-font;
    padding-bottom: 16px;
  }
  &-title {
    color: $black;
    font-family: $primary-font;
    padding-bottom: 16px;
  }
  &-description {
    color: $black;
    font-family: $primary-font;
    font-weight: 500;
  }
  &-sub {
    padding-top: 24px;
    color: $black;
    font-family: $primary-font;
    font-size: $font-size-large;
  }
  &-list {
    color: $black;
    font-family: $primary-font;
    &-item {
      color: $black;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 16px 0;
      border-bottom: 1px solid $purple;
      &-title {
        font-weight: bold;
        font-size: $font-size-normal;
      }
    }
  }
}
</style>