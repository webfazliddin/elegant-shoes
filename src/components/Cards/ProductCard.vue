<template>
  <div class="card">
    <div class="card__image">
      <img src="../../assets/product/img2.jpg" />
    </div>
    <div class="card__body">
      <div>
        <div class="card__title">Loro Piano</div>
        <div>
          <!-- <img src="../../assets/product/eye.png" alt /> -->
          <b-icon @click="openModal" style="color:#4d5fff;" icon="eye"></b-icon>
        </div>
      </div>
      <div class="card__text">
        <p class="card__p1">149 {{ $t("ming") }}</p>
        <p class="card__p2">250 {{ $t("ming") }}</p>
      </div>
    </div>
    <b-modal size="xl" class="Modal" v-model="ProductModal" hide-footer>
      <div class="ViewProducts">
        <div class="ProductList">
          <div>
            <img src="../../assets/product/images.jpg" />
          </div>
          <div>
            <img src="../../assets/product/images.jpg" />
          </div>
          <div>
            <img src="../../assets/product/images.jpg" />
          </div>
        </div>
        <div class="mainProduct">
          <img src="../../assets/product/images.jpg" />
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BIcon, BModal } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    BModal
  },
  name: "ProductCard",
  props: {
    image: {
      type: String
      // default:
      //   "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ProductModal: false
    };
  },
  methods: {
    openModal() {
      this.ProductModal = true;
    }
  }
};
</script>

<style lang="scss">
.card {
  border-radius: 5px;

  &__image img {
    width: 100%;
    height: 260px;
    border-radius: 5px 5px 0 0;
    background-size: cover;
    cursor: pointer;
  }

  &__body {
    padding: 20px;

    div {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        display: flex;
        justify-content: space-between;

        img {
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
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__p1 {
    color: red;
    margin-right: 12px;
  }

  &__p2 {
    color: $color-grey;
    font-weight: bold;
    text-decoration: line-through;
  }
}
.ProductList img {
  width: 140px;
  height: auto;
  padding: 10px 0 0 0;
}
.ViewProducts {
  display: flex;
  gap: 180px;
}
.mainProduct img{
  width: 440px;
  height: auto;
   padding: 10px 0 0 0;
}

@media screen and (max-width: 768px) {
  .ViewProducts {
  display: flex;
  gap: 40px;
}
  .ProductList img {
    width: 60px;
    height: auto;
  }

  .mainProduct img{
    width: 200px;
    height: auto;
  }
}
</style>
