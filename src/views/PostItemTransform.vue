<script setup lang="ts">
import { RouterLink } from "vue-router";
import { updateDoc } from "@/firebase";

import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { toRefs } from "vue";
import type { PostType } from "@/stores/posts";

const props = defineProps<{
  post: PostType;
}>();

const { post } = toRefs(props);

let replacedContent = props.post?.content?.slice() || "";

let matches =
  props.post?.content?.match(/"\/storage\/app\/media\/(.*?)"/g) || [];

const replaces = await Promise.all(
  matches.map(async (originalPath: string) => {
    const image = decodeURI(
      originalPath
        .toString()
        .replace("/storage/app/media", "")
        .substring(1)
        .slice(0, -1)
    );

    const url = await getDownloadURL(storageRef(getStorage(), image));

    return {
      originalPath,
      newPath: url,
    };
  })
);

// console.log({ replaces });
replaces.forEach((r) => {
  replacedContent = replacedContent.replace(r.originalPath, `"${r.newPath}"`);
});
// console.log({ replacedContent });

updateDoc({
  firestorePath: `posts/${props.post.id}`,
  payload: Object.assign({}, props.post),
  // payload: Object.assign({}, props.post, { content: replacedContent }),
});
</script>

<template>
  <div
    class="rounded-md bg-seasalt p-6 text-chestnut shadow-md outline-davys-gray"
  >
    <h2 class="text-xl font-bold">
      <RouterLink :to="`blog/${post.id}`">
        {{ post.title }}
      </RouterLink>
    </h2>

    <!-- <div
      class="blog-post space-y-2 text-raisin-black"
      v-html="replacedContent"
    ></div> -->
  </div>
</template>
