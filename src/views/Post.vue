<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PostType } from '../types/PostType'

const props = defineProps<{
    post: PostType
}>()
</script>

<template>
<div>
    <h1 class="text-3xl font-bold underline">
        {{ post.title }}
    </h1>

    <div
        v-html="post.content"
    ></div>
</div>
</template>