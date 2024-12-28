import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/AppLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "aboutus",
          name: "aboutus",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: () => import("@/views/PortfolioView.vue"),
        },
        {
          path: "contactus",
          name: "contactus",
          component: () => import("@/views/ContactView.vue"),
        },
      ],
    },
  ],
});

export default router;
