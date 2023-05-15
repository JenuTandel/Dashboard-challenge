import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GraphView from "../views/GraphView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "graph",
    component: GraphView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
