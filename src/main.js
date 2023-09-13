import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

import ProductCard from "./components/Cards/ProductCard"
import DialogCard from "./components/Cards/DialogCard"
import ProductCardSkeleton from "./components/Skeletons/ProductCardSkeleton"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'es6-promise/auto'


Vue.config.productionTip = false;

Vue.component('ProductCard', ProductCard);
Vue.component('DialogCard', DialogCard);
Vue.component('ProductCardSkeleton', ProductCardSkeleton);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
