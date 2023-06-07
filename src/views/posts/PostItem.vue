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
  <div
    class="rounded-md bg-seasalt p-6 text-chestnut shadow-md outline-davys-gray"
  >
    <button class="float-right" @click="() => postStore.edit()">Edit</button>
    <h2 class="text-xl font-bold">
      <RouterLink :to="`blog/${post?.id}`">
        {{ post?.title }}
      </RouterLink>
    </h2>

    <div
      v-if="post?.perex"
      class="blog-post space-y-2 text-raisin-black"
      v-html="post?.perex"
    ></div>
  </div>
</template>
