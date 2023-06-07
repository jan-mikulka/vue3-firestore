<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { PostType } from "@/types/posts";
// import { usePostsStore } from "@/stores/posts";

const props = defineProps<{
  postId: string;
  post: PostType;
}>();

// const postsStore = usePostsStore();
// const post = postsStore.getPost(postId);
// console.log({ post });
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      {{ post.title }}
    </h1>

    <div v-html="post.content"></div>
  </div>
</template>
