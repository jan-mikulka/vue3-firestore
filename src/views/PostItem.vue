<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PostType } from '../types/PostType'

const props = defineProps<{
    post: PostType
}>()
</script>

<template>
<div>
    <h2 class="text-3xl font-bold underline">
        <RouterLink
            :to="`blog/${post.id}`"
        >
            {{ post.title }}
        </RouterLink>
    </h2>

    <div
        v-html="post.content"
    ></div>
</div>
</template>