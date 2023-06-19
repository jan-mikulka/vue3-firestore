<script setup lang="ts">
import { RouterLink } from "vue-router";
import {
  usePostStore,
  type PostStoreState,
  type PostStore,
} from "@/stores/post";
import { storeToRefs } from "pinia";
import { toRefs } from "vue";

const props = defineProps<{
  postId: string;
}>();

const { postId } = toRefs(props);

const postStore: PostStore = usePostStore(postId.value);
const { post }: PostStoreState = storeToRefs(
  usePostStore(postId.value)
) as PostStoreState;
</script>

<template>
  <div class="rounded-md bg-light-grey p-6 text-primary shadow-md outline-grey">
    <button class="float-right" @click="() => postStore.edit()">Edit</button>
    <h2 class="text-xl font-bold">
      <RouterLink :to="`blog/${post?.id}`">
        {{ post?.title }}
      </RouterLink>
    </h2>

    <div
      v-if="post?.perex"
      class="blog-post text-raisin-black space-y-2"
      v-html="post?.perex"
    ></div>
  </div>
</template>
