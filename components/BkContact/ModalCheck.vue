<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function setupConfetti(): { colors: string[], confettiCount: number } {
  const colors: string[] = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
  let confettiCount: number = 150;
  if (window.innerWidth < 768) { 
    confettiCount = 50;
  }
  return { colors, confettiCount };
}
function createConfetti(colors: string[], confettiCount: number): void {
  const confettiContainer = document.getElementById('confetti-container');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.position = 'absolute'; 
    confetti.style.top = `${-Math.random() * vh}px`;
    confetti.style.left = `${Math.random() * vw}px`;
    confetti.style.opacity = '0';
    confettiContainer?.appendChild(confetti);

    gsap.to(confetti, {
      duration: Math.random() * 6 + 3, 
      y: vh + confetti.offsetHeight,
      rotation: Math.random() * 720 - 360,
      opacity: 1,
      ease: 'power4.out',
      onComplete: () => {
        confetti.remove();
      }
    });
  }
}
function onMountedHandler():void {
  const tl = gsap.timeline({ defaults: { duration: 2, ease: 'power4.out' } }); 

  tl.from(".circle", { 
      opacity: 0, 
      scale: 0, 
      duration: 2.5 
  })
    .from(".tick", { 
      opacity: 0, 
      scale: 0, 
      rotation: -180, 
      transformOrigin: '50% 50%', 
      duration: 2 
    }, '-=1');

  ScrollTrigger.create({
    trigger: ".circle",
    start: 'top 80%',
    end: 'bottom 20%',
    animation: tl,
    toggleActions: 'play none none none',
  });

  const { colors, confettiCount } = setupConfetti();
  createConfetti(colors, confettiCount);
}

onMounted(onMountedHandler);
</script>

<template>
  <div class="container">
    <div class="circle">
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
    <div class="content">
      <h2 class="content-tittle">
        ¡Gracias por tu interés!
      </h2>
      <p class="content-paragraph">
        En breve nos pondremos en contacto contigo
      </p>    
    </div>
  </div>
  <div id="confetti-container"></div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.circle {
  width: 50vw;  
  height: 50vw;  
  max-width: 300px;  
  max-height: 300px; 
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tick {
  width: 20vw;  
  height: 20vw;  
  max-width: 120px; 
  max-height: 120px;
}
#confetti-container {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.content{
  text-align: center;
  margin-top: 32px;
  color: $white;
  &-tittle{
    font-family: $primary-font;
    font-size: $font-size-large;
    margin-bottom: 8px;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: $font-size-extra-large;
    }
  }
  &-paragraph{
    font-family: $secondary-font;
    font-size: $font-size-normal;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: $font-size-large;
    }
  }
}
</style>