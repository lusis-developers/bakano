<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array,
    validator: (value: string[]) => {
      return value.every((image) => typeof image === 'string');
    },
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true
  }
});

const currentImageIndex = ref(0);
let intervalId: number | NodeJS.Timeout;

function prevImage(): void {
  currentImageIndex.value = (currentImageIndex.value + props.images.length - 1) % props.images.length;
}
function nextImage(): void {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
}
function setImage(index: number): void {
  currentImageIndex.value = index;
}
function changeImageAutomatically(): void {
  nextImage();
};

onMounted(() => {
  intervalId = setInterval(changeImageAutomatically, 5000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-slide">
      <img
        v-for="(image, index) in props.images"
        :key="index"
        alt="imagen del carrusel"
        loading="lazy"
        :src="(image as string)"
        :class="{ active: currentImageIndex === index }"
        class="image" />   
    </div>
    <button 
      v-if="props.showButtons"
      class="carousel-control left" 
      aria-label="imagen anterior"
      @click="prevImage">
        <i class="fa-solid fa-caret-left"></i>
    </button>
    <button 
      v-if="props.showButtons"
      class="carousel-control right" 
      aria-label="siguiente imagen"
      @click="nextImage">
        <i class="fa-solid fa-caret-right"></i>
    </button>
    <div class="carousel-indicators">
      <span
        v-for="(image, index) in props.images"
        :key="index"
        :class="{ active: currentImageIndex === index }"
        @click="setImage(index)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  @media (min-width: $tablet-lower-breakpoint) {
    width: 80vw;
    margin: 0 auto;    
  }
  .carousel-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .image {
      position: absolute;
      width: 80%;
      height: 100%;
      background-size: cover;
      transition: opacity 1s ease-in-out;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    border: none;
    cursor: pointer;
    background-color: transparent;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    span {
      display: block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #000;
      border-radius: 50%;
      cursor: pointer;
      &.active {
        background-color: $pink;
      }
    }
  }
}
.fa-solid{
  color: $black;
  font-size: 40px;
}
</style>