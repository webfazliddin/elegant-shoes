import Vue from "vue";
import VueRouter from "vue-router";

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
     
        ],
      },
    ]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
