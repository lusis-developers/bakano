<script setup lang="ts">
interface Stat {
  value: string;
  label: string;
  sign: string;
}

interface DetailCard {
  title: string;
  description: string;
  icon: string;
}

const stats = ref<Stat[]>([
  { value: '50', sign: '+', label: 'Clientes atendidos' },
  { value: '100', sign: '+', label: 'Proyectos realizados' },
  { value: '98', sign: '%', label: 'Satisfacción de usuarios' },
  { value: '5', sign: '+', label: 'Años de experiencia en IA' },
]);
const displayedValues = ref<number[]>([0, 0, 0, 0]);

const detailCards = ref<DetailCard[]>([
  { 
    title: 'Soluciones a Medida con IA', 
    description: 'Ofrecemos soluciones tecnológicas a través de chatbots personalizados con IA que se adaptan a los requerimientos de optimización de tu negocio', 
    icon: 'fa-solid fa-puzzle-piece'
  },
  { 
    title: 'Compromiso', 
    description: 'En nuestro equipo, nos dedicamos a impulsar el éxito de nuestros clientes, trabajando con compromiso y energía para alcanzar sus objetivos', 
    icon: 'fa-solid fa-globe'
  },
  { 
    title: 'Colaboración creativa', 
    description: 'Fusionamos ideas y creatividad para desarrollar juntos soluciones únicas para tu empresa que conectan profundamente con tus objetivos',
    icon: 'fa-regular fa-comments'
  },
]);


function animateValue (start: number, end: number, duration: number, index: number) {
  const range = end - start;
  let current = start;
  const increment = range > 0 ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  const timer = setInterval(() => {
    current += increment;
    displayedValues.value[index] = current;
    if( current === end ) {
      clearInterval(timer);
    };
  }, stepTime);
};

onMounted(() => {
  stats.value.forEach((stat, index) => {
    animateValue(0, Number(stat.value), 2000, index);
  });
});
</script>

<template>
  <div class="stats-section">
    <div class="stats-header">
      <div 
        v-for="(stat, index) in stats" 
        :key="index" 
        class="stat-item">
        <h2 class="stat-item-title">{{ displayedValues[index] }}{{ stat.sign }}</h2>
        <p class="stat-item-text">{{ stat.label }}</p>
      </div>
    </div>
    <div class="stats-details">
      <div 
        v-for="(card, index) in detailCards" 
        :key="index" 
        class="detail-card">
        <div class="icon">
          <i :class="card.icon"></i>
        </div>
        <h3 class="detail-card-title">{{ card.title }}</h3>
        <p 
          class="detail-card-text">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.stats-section {
  background: linear-gradient(to bottom, $black 60%, $white 40%);
  padding: 2rem;
  text-align: center;

  .stats-header {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;

    .stat-item {

      &-title {
        font-family: $primary-font;
        font-size: $font-size-extra-large;
        margin: 0;
        color: $pink;
      }

      &-text {
        font-family: $primary-font;
        font-size: $font-size-normal;
        margin: 0.5rem 0 0;
        color: $pink;
      }
    }
  }

  .stats-details {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 24px;
    @media (min-width: 768px) {
      gap: 16px;
    }
    

    .detail-card {
      max-width: 600px;
      background: $white;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      @media (min-width: 768px) {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 14px;
      }

      .icon {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background: $pink;
        border-radius: 100%;
      }

      &-title {
        font-family: $primary-font;
        font-size: $font-size-large;
        margin-bottom: 0.5rem;
      }

      &-text {
        font-family: $primary-font;
        font-size: $font-size-normal;
        color: $black;
      }
    }

    .detail-card:nth-child(2) {
      background-color: $pink;
      color: $white;
      .icon {
        background-color: $white;
        color: $pink;
      }
      .detail-card-text {
        color: white;
      }
    }
  }
}
</style>
