import { createWebHistory, createRouter } from "vue-router";
import Demo from "@/pages/demo.vue";
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/demo"
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
