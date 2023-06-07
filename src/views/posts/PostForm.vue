<script setup lang="ts">
import AnInput from "@/components/AnInput.vue";
import { usePostStore } from "@/stores/post";
const props = defineProps<{
  id: string;
}>();

const postStore = usePostStore(props.id);
</script>

<template>
  <div>
    <AnInput :store="postStore" :fieldName="'perex'" />
  </div>
</template>
