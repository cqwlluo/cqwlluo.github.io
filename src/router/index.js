import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
    children: [
      {
        path:'',
        component: () => import("../components/My.vue"),
        name:"My",
      },
      {
        path: "/difficulty",
        name: "Difficulty",
        component: () => import("../components/Difficulty.vue"),
      },
      {
        path: "/interview",
        name: "Interview",
        component: () => import("../components/Interview.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("../components/News.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
