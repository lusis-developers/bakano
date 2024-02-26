<script lang="ts" setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power4.out' } });

  tl.from(".circle", { 
      opacity: 0, 
      scale: 0, 
      duration: 1.5 
  })
    .from(".tick", { 
      opacity: 0, 
      scale: 0, 
      rotation: -180, 
      transformOrigin: '50% 50%', 
      duration: 1 
    }, '-=1');

  ScrollTrigger.create({
    trigger: ".circle",
    start: 'top 80%',
    end: 'bottom 20%',
    animation: tl,
    toggleActions: 'play none none none',
  });
});
</script>

<template>
  <div class="container">
    <div class="circle"></div>
    <div class="tick">
      <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#fff" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.circle {
  width: 200px;
  height: 200px;
  background-color: #4CAF50;
  border-radius: 50%;
}
.tick {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}
</style>