<template>
  <div class="card">
    <div class="card__image">
      <img src="../../assets/product/shoesel.webp">
    </div>
    <div class="card__body">
      <div>
        <div class="card__title">{{ title }}</div>
        <div @click="openModal"><img src="../../assets/product/eye.png" alt=""></div>
      </div>
      <div class="card__text">
        <p class="card__p1">149ming</p>
        <p class="card__p2">250ming</p>
      </div>
    </div>
         <!-- <b-modal
            size="lg"
            v-model="ProductModal"
            no-close-on-backdrop
            hide-footer
          >
          <p>hello world</p>
          </b-modal> -->
  </div>
</template>

<script>
import { BModal } from "bootstrap-vue";
export default {
   components: {
    BModal,
  },
  name: "ProductCard",
  props: {
    image: {
      type: String,
      default: 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      ProductModal: false,
     }
   },
    methods:{
    openModal() {
      this.ProductModal = true;
       }
    }
};
</script>

<style lang="scss">
.card {
  border-radius: 5px;
  width: 92%;
  border: 1px solid $color-secondary-light;

  &__image img {
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
    background-size: cover;
    cursor: pointer;
  }


  &__body {
    padding: 16px;

    div {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        display: flex;
        justify-content: space-between;

        img{
          width: 35px;
          cursor: pointer;
        }
      }
    }
  }

  &__title {
    color: $color-dark;
    font-family: $base-font;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &__text {
    margin-bottom: 14px;

    p {
      font-family: $base-font;
      font-size: 13px;
      line-height: 16px;
    }

   
  }

  &__p1 {
      color: red;
      margin-right: 12px; 
    }

    &__p2 {
      color: $color-dark;
      font-weight: bold;
      text-decoration: line-through;
    }
}
</style>
