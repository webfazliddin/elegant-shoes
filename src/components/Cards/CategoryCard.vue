<template>
  <div class="category">
    <a style="text-decoration: none" href="#">
      <div class="categorCardTitle">{{$t(title)}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.categorCardTitle {
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: $base-font;
  height: 60px;
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;
  background: $color-white;

  &:hover {
    cursor: pointer;
    border: 1px solid $color-primary;
    background-color: $color-grey-lightest;
    box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
  }
}
</style>
