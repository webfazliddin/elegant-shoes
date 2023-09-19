<template>
  <div>
    <AppHeader />

    <AppCarousel />

    <AppCategory />

    <router-view></router-view>

    <AppFooter />
  </div>
</template>

<script>


import AppHeader from "../components/Layout/AppHeader.vue";
import AppFooter from "../components/Layout/AppFooter.vue";
import AppCarousel from "../components/Layout/AppCarousel.vue";
import AppCategory from "../components/Layout/AppCategory.vue";

export default {
  
  name: "MainLayout",
  components: {
    AppHeader,
    AppFooter,
    AppCarousel,
    AppCategory
  },
};
</script>
