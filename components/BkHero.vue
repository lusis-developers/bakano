<script setup>
import gsap from 'gsap'

const words = ref([
  {
    text: "Diego"
  },
  {
    text: "Shaggy"
  },
  {
    text: "Luis"
  },
  {
    text: "Denissita"
  },
  {
    text: "Genaro"
  },
  {
    text: "Dayi"
  }
]);
const radius = 200; 


function calculatePositions () {
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  words.value.forEach((word, index, array) => {
    const angle = (index / array.length) * (2 * Math.PI);
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    word.style = `left: ${x}px; top: ${y}px; opacity: 0; position: absolute;`; 
  });
};

function revealBakano() {
  gsap.to('.bakano', {
    opacity: 1,
    duration: 1
  });
}

onMounted(() => {
  calculatePositions();
  window.addEventListener('resize', calculatePositions)

  gsap.fromTo('.word', {
    scale: 0.5,
    opacity: 0,
    transform: 'translate(-50%, -50%) translateZ(-1000px)'
  }, {
    scale: 1,
    opacity: 1,
    transform: 'translate(-50%, -50%) translateZ(0px)',
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out',
    onComplete: revealBakano
  });

  gsap.to('.word', {
    opacity: 1,
    color: 'white',
    transform: 'translateZ(0px) scale(1)',
    stagger: 0.1,
    duration: 1,
    ease: 'power3.in',
  });
});
</script>

<template>
  <div class="container">
    <div 
      v-for="(word, index) in words"
      :key="index"
      class="word"
      :style="word.style">
      {{ word.text }}
    </div>
    <div class="bakano">
      Bakano
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $black;

  .word {
    position: absolute;
    color: $white;
    transform: translate(-50%, -50%) rotateX(75deg) translateZ(0px); 
    transform-origin: center center;
    opacity: 0;
  }

  .bakano {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    font-size: 2em;
    opacity: 0;
    z-index: 10;
    text-align: center;
  }
}
</style>