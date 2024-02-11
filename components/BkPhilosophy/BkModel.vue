<template>
  <div class="container">
    <p class="container-message">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse velit magnam distinctio odit alias minus, quaerat natus dignissimos ex quae earum quo laudantium harum nobis cupiditate illo accusantium quisquam vero.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &-message {
    font-size: 2rem;
    border: .5rem solid $pink;  
    background-color: $white;
    padding: 24px;
    border-radius: 8px;
  }
}
</style>