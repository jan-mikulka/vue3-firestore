import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "posts",
      component: () => import("@/views/posts/PostsList.vue"),
    },
    {
      path: "/blog/{postId}",
      name: "post",
      component: () => import("@/views/posts/PostView.vue"),
    },
  ],
});

export default router;
