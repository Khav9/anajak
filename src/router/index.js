import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/AppLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/aboutus",
          name: "aboutus",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/portfolio",
          name: "portfolio",
          component: () => import("@/views/PortfolioView.vue"),
        },
        {
          path: "/contactus",
          name: "contactus",
          component: () => import("@/views/ContactView.vue"),
        },
      ],
    },
  ],
});

export default router;