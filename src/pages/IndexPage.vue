<template>
  <section>
    <div class="container">
      <!-- ============Carousel card=========== -->
      <div class="carouselCard__list">
        <CarouselCard />
      </div>

      <!-- ============Category card=========== -->
      <div class="category__list">
        <CategoryCard
          v-for="(categoryCard, index) in categoryCardData"
          :key="`categoryCard__${index}`"
          :title="categoryCard.title"
        />
      </div>

      <!-- ============Product card=========== -->
      <div class="products__list" v-if="isLoading">
        <ProductCardSkeleton
          v-for="(_, index) in Array.from({ length: 12 }).fill(0)"
          :key="`productSkeleton__${index}`"
        />
      </div>

      <div class="products__list" v-if="!isLoading">
        <ProductCard
          v-for="product in productList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :title="product.name"
        />
        <ProductCard
          v-for="product in productList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :title="product.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import categoryCardData from "../data/categoryCard";
import client from "../api";

export default {
  name: "IndexPage",
  data() {
    return {
      isLoading: false,
      isShowModal: false,
      categoryCardData,
      productList: [],
    };
  },
  methods: {
    loadData() {
      this.isLoading = true;
      const promise1 = client.get("/api/products").then((response) => {
        this.productList = response.data.data;
      });
      Promise.all([promise1]).finally(() => {
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss">
.carouselCard {
  &__list {
    margin-bottom: 20px;
  }
}

.category {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin: 50px 0 100px 0;
  }
}

@media screen and (max-width: 768px) {
  .products {
    &__list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
