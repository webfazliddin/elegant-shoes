<template>
  <div class="container">
    <div class="mainCategory">
      <div>
         <img src="@/assets/product/mixColor-shoes.png" alt />
      </div>
      <div>
        <img src="@/assets/product/mixColor-shoes.png" alt />
      </div>
      <div>
        <img src="@/assets/product/mixColor-shoes.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
export default {
  comments: { BCarousel, BCarouselSlide },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.mainCategory{
    display: flex;
    margin-top: 40px;
    justify-content: center;
    gap: 380px;
}
.mainCategory div{
    flex-wrap: wrap;
    width: 160px;
    height: auto;
   border-radius: 25px;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.mainCategory img{
    width: 140px;
}
</style>
