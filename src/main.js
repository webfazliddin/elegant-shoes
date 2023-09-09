import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ProductCard from "./components/Cards/ProductCard"
import CategoryCardSkeleton from "./components/Skeletons/CategoryCardSkeleton"
import ProductCardSkeleton from "./components/Skeletons/ProductCardSkeleton"

import 'es6-promise/auto'


Vue.config.productionTip = false;

Vue.component('CategoryCardSkeleton', CategoryCardSkeleton);
Vue.component('ProductCard', ProductCard);
Vue.component('ProductCardSkeleton', ProductCardSkeleton);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
