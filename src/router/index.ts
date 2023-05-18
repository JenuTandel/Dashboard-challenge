import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GraphView from "../views/GraphView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/graph",
    name: "graph",
    component: GraphView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    component: HomeView,
  },
  {
    path: "/bar",
    name: "bar",
    component: HomeView,
  },
  {
    path: "/segment",
    name: "segment",
    component: HomeView,
  },
  {
    path: "/table",
    name: "table",
    component: HomeView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: HomeView,
  },
  {
    path: "/file",
    name: "file",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "link-active",
});

export default router;
