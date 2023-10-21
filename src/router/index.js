import Vue from "vue";
import VueRouter from "vue-router";
import AboutPage from '@/data/about/index.vue';
import newsPage from '@/data/news/index.vue';

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
     
        ],
      },
    ]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
