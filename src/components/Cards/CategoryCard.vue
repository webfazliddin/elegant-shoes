<template>
  <div class="category">
    <div class="category__item">Man</div>
    <div class="category__item">Woman</div>
    <div class="category__item">Kids</div>
  </div>
</template>

<style lang="scss">
.category {
    display: flex;
    gap: 300px;
  }
.category__item {
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: $base-font;
    height: 80px;
    width: 100px;
    border: 1px solid $color-grey-lightest;
    border-radius: 16px;
    background: $color-white;

    &:hover {
      cursor: pointer;
      border: 1px solid $color-primary;
      background-color: $color-grey-lightest;
    }
}


</style>
