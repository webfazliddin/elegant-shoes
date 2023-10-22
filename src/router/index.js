import Vue from "vue";
import VueRouter from "vue-router";
import AboutPage from '@/data/about/index.vue';
import newsPage from '@/data/news/index.vue';
import manPage from '@/categories/manCategory/index.vue';
import womanPage from '@/categories/womanCategory/index.vue';
import kidsPage from '@/categories/kidsCategory/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "",
        component: () => import("../pages/IndexPage"),
      },
      {
        path: "data/about/index",
        name: "AboutPage",
        component: AboutPage,
      },
      {
        path: "data/news/index",
        name: "newsPage",
        component: newsPage,
      },
      {
        path: "categories/manCategory/index",
        name: "manPage",
        component: manPage,
      },
      {
        path: "categories/womanCategory/index",
        name: "womanPage",
        component: womanPage,
      },
      {
        path: "categories/kidsCategory/index",
        name: "kidsPage",
        component: kidsPage,
      },
     
        ],
      },
    ]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
