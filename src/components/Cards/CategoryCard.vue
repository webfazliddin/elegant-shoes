<template>
  <div class="category">
    <div class="categorCardTitle" @click="manPage">{{ $t("Man") }}</div>
    <div class="categorCardTitle" @click="womanPage">{{ $t("Women") }}</div>
    <div class="categorCardTitle" @click="kidsPage">{{ $t("Kids") }}</div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    manPage() {
      this.$router.push({ name: "manPage" }).then(() => {
        window.location.reload();
      });
    },
    womanPage() {
      this.$router.push({ name: "womanPage" }).then(() => {
        window.location.reload();
      });
    },
    kidsPage() {
      this.$router.push({ name: "kidsPage" }).then(() => {
        window.location.reload();
      });
    },
  },
};
</script>

<style lang="scss">
.category {
  display: flex;
  gap: 40px;
}
.category div {
  width: 100%;
}
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