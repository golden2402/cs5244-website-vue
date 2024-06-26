import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      alias: ["/home", "/index.html"],
      component: HomeView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@/views/NotFoundView.vue")
    },
    {
      path: "/category/:id",
      name: "category",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/CategoryView.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartView.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/CheckoutView.vue")
    },
    {
      path: "/confirmation",
      name: "confirmation",
      component: () => import("@/views/ConfirmationView.vue")
    }
  ]
});

export default router;
