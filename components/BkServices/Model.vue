<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: Array as () => string[],
    required: true
  }
});

const isDesktop:boolean = globalThis.innerWidth >= 1024;
const titleRef = ref<HTMLElement | null>(null);
const paragraphRef = ref<HTMLElement | null>(null);

function titleHoverHandler(event: MouseEvent): void {
  if (isDesktop) {
    const target = event.target as HTMLElement
    const titles = document.querySelectorAll('.services__model__title')
    titles.forEach((title) => {
      if (title !== target) {
        (title as HTMLElement).style.filter = 'blur(16px)';
      }
    })
    const correspondingParagraphs = target.nextElementSibling as HTMLElement
    showParagraphs(correspondingParagraphs)
  }
}
function titleMouseLeaveHandler(): void {
  if (isDesktop) {
    const titles = document.querySelectorAll('.services__model__title')
    const paragraphs = document.querySelectorAll('.services__model__paragraph')
    titles.forEach((title) => {
      (title as HTMLElement).style.filter = 'none';
    })
    paragraphs.forEach((paragraph) => {
      hideParagraphs(paragraph as HTMLElement);
    })
  }
}
function showParagraphs(el: HTMLElement): void {
  gsap.to(el, {
    duration: 0.5,
    y: 0,
    opacity: 1,
    display: 'block',
    ease: 'power3.out'
  })   
}
function hideParagraphs(el: HTMLElement): void {
  gsap.to(el, {
    duration: 0.5,
    y: 20,
    opacity: 0,
    display: 'none',
    ease: 'power3.out'
  })  
}

defineExpose({ 
  titleRef,
  paragraphRef
});
</script>

<template>
  <div class="services__model">
    <h2 
      ref="titleRef"
      class="services__model__title" 
      @mouseover="titleHoverHandler" 
      @mouseleave="titleMouseLeaveHandler">
        {{ title }}
    </h2>
    <div 
      ref="paragraphRef" 
      class="services__model__paragraph">
        <p 
          v-for="(p, index) in paragraph" 
          :key="index">
            {{ p }}
        </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services__model {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: $desktop-lower-breakpoint) {
    flex-direction: row;
    align-items: center;
  }
}
.services__model__title {
  font-family: $primary-font;
  font-size: 8vw;
  color: $pink;
  cursor: pointer;
  transition: all .3s linear, transform 1.4s cubic-bezier(.22, 1, .36, 1);
  @media (min-width: $desktop-lower-breakpoint) and (max-width: $desktop-upper-breakpoint){
    font-size: 5vw;
  }
  @media (min-width: $desktop-lower-breakpoint) {
    font-size: 5vw;
    color: $black;
    &:hover {
      color: $pink;
    }
  }
}
.services__model__paragraph {
  font-family: $secondary-font;
  margin-top: 8px;
  font-size: $font-size-small;
  color: $black;
  max-width: 500px;
  @media (min-width: $desktop-lower-breakpoint) {
    margin-top: 0;
//    margin-right: 100px;
    font-size: 1rem;
    text-align: left;
    width: 450px;
   display: none;
  }
}
</style>