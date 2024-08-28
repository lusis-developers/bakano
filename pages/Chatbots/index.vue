<template>
  <div class="container">
    <BkPortfolioServices/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: $tablet-lower-breakpoint) {
    gap: 48px;
  }
}
</style>