<script setup lang="ts">
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
  <div>
    <h1 class="text-3xl font-bold underline">
      {{ post.title }}
    </h1>

    <div v-html="post.content"></div>
  </div>
</template>
