import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "posts",
      component: () => import("@/views/PostsList.vue"),
    },
    {
      path: "/blog/{postId}",
      name: "post",
      component: () => import("@/views/PostView.vue"),
    },
  ],
});

export default router;
