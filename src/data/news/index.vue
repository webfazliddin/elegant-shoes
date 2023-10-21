<template>
  <div class="container">
    <div>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div>
    <div style="margin-top:50px"></div>
  </div>
</template>

<script>
// import AppFooter from "@/components/Layout/AppFooter.vue";

export default {
//   name: "MainLayout",
  components: {
    // AppFooter,
  },
  data(){

  }
};
</script>

<style>
.mainImg{
 border-radius: 15px;
}
</style>
