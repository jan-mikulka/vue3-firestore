<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/stores/posts";
import PostItem from "./PostItem.vue";
// import type { PostType } from "@/types/PostType";
const postsStore = usePostsStore();

const { posts } = storeToRefs(postsStore);
// const { posts }: { posts: PostType[] } = storeToRefs(postsStore);
</script>

<template>
  <div>
    <div class="container space-y-4 lg:columns-2">
      <PostItem v-for="post in posts" :postId="post.id" :key="post.id" />
    </div>

    <button
      class="btn btn-primary mx-auto"
      @click="() => postsStore.fetchMore()"
    >
      Fetch more
    </button>
  </div>
</template>
