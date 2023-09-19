<template>
  <div class="container">
    <!-- <b-carousel class="carousel"
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000;margin-top:30px"
      fade
    >
      <b-carousel-slide>
        <template #img>
          <div style="background-color:#45BBD7; border-radius:50px" class="main-carousel-img">
            <img src="@/assets/product/lightBlue-shoes.png" alt />
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div style="background-color:#EB7B8F;border-radius:50px" class="main-carousel-img">
            <img src="@/assets/product/mixColor-shoes.png" alt />
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div style="background-color:#68C3DB;border-radius:50px" class="main-carousel-img">
            <img src="@/assets/product/white-shoes.png" alt />
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel> -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="
          text-shadow: 1px 1px 2px #333;
          border-radius: 50px;
          margin-top: 30px;
        "
        class="carousel"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide style="border-radius: 50px">
          <template #img>
            <div
              style="background-color: #45bbd7; border-radius: 50px"
              class="main-carousel-img"
            >
              <img src="@/assets/product/lightBlue-shoes.png" alt />
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide style="border-radius: 50px">
          <template #img>
            <div
              style="background-color: #eb7b8f; border-radius: 50px"
              class="main-carousel-img"
            >
              <img src="@/assets/product/mixColor-shoes.png" alt />
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide style="border-radius: 50px">
          <template #img>
            <div
              style="background-color: #68c3db; border-radius: 50px"
              class="main-carousel-img"
            >
              <img src="@/assets/product/white-shoes.png" alt />
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
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
  methods: {},
};
</script>
<style>
.main-carousel-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel img {
  height: 440px;
}

@media screen and (max-width: 768px) {
  .carousel img {
    height: 200px;
  }
}
</style>
