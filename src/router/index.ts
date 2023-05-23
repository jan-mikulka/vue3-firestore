import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: () => import('@/views/Posts.vue')
    },
    {
      path: '/blog/{postId}',
      name: 'post',
      component: () => import('@/views/Post.vue')
    }
  ]
})

export default router