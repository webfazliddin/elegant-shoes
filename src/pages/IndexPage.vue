<template>
  <section>
    <div class="container">
      <!-- ============Product card=========== -->
      <div class="products__list" v-if="isLoading">
        <ProductCardSkeleton
          v-for="(_, index) in Array.from({ length: 8 }).fill(0)"
          :key="`productSkeleton__${index}`"
        />
      </div>

      <div class="products__list" v-if="!isLoading"  @click="callModal">
        <ProductCard
          v-for="product in productList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :title="product.name"
        />
      </div>

      <DialogCard v-if="isShowModal" :title="'ffdfdfd'" @close="close">
          <template #body> Modal Body </template>
          <template #footer>
            <button>Cancel</button>
            <button>Send</button>
          </template>
        </DialogCard>
    </div>
  </section>
</template>

<script>
import client from "../api";
import DialogCard from "@/components/Cards/DialogCard.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      isLoading: false,
      isShowModal: false,
      productList: [],
    };
  },
  components: {
    DialogCard
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
    close() {
      this.isShowModal = false;
    },
    callModal() {
      this.isShowModal = true;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss">
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
