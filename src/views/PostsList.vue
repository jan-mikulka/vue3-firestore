<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { usePostsStore } from "@/stores/posts";
import PostItem from "./PostItem.vue";
const postsStore = usePostsStore();
const { posts } = storeToRefs(postsStore);
</script>

<template>
  <div>
    <h1>Blog posts</h1>

    <PostItem v-for="post in posts" :post="post" :key="post.id" />

    <button @click="() => postsStore.fetchMore()">Fetch more</button>
  </div>
</template>
