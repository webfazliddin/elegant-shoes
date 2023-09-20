import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";

import CarouselCard from "./components/Cards/CarouselCard";
import CategoryCard from "./components/Cards/CategoryCard";
import ProductCard from "./components/Cards/ProductCard";
import ProductCardSkeleton from "./components/Skeletons/ProductCardSkeleton";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueI18n from "vue-i18n";

Vue.use(VueI18n);
import russianLanguage from "./lang/langMessages/ru.json";
import uzCyrillic from "./lang/langMessages/uz_cyrl.json";
import uzLang from "./lang/langMessages/uz_latn.json";

const i18n = new VueI18n({
  locale: "uzLang",
  messages: {
    russianLanguage,
    uzCyrillic,
    uzLang,
  },
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "es6-promise/auto";

Vue.config.productionTip = false;

Vue.component("CarouselCard", CarouselCard);
Vue.component("CategoryCard", CategoryCard);
Vue.component("ProductCard", ProductCard);
Vue.component("ProductCardSkeleton", ProductCardSkeleton);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
