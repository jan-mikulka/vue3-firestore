<script setup lang="ts">
import ASwitch from "@/components/ASwitch.vue";
import AnEditor from "@/components/AnEditor.vue";
import { usePostStore } from "@/stores/post";
const props = defineProps<{
  id: string;
}>();

const postStore = usePostStore(props.id);
</script>

<template>
  <div class="w-full">
    <div class="mb-4">
      <ASwitch :store="postStore" fieldName="published" class="" />
    </div>

    <AnEditor :store="postStore" fieldName="perex" class="blog-post" />

    <AnEditor :store="postStore" fieldName="content" class="blog-post" />
  </div>
</template>
