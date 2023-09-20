<template>
  <div>
    <AppHeader />

    <router-view></router-view>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/Layout/AppHeader.vue";
import AppFooter from "../components/Layout/AppFooter.vue";

export default {
  name: "MainLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
