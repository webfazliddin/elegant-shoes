<template>
  <div>
    <div @click="handleClick">
      <b-icon style="color: #4e60ff" icon="x-lg"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  methods: {
    handleClick() {
      this.$emit("hiddenMenu");
    },
  },
};
</script>

<style>
.bg {
  background: #000;
  position: absolute;
  left: 0;
  margin-top: -40px;
  width: 100%;
  height: 100vh;
}
</style>
