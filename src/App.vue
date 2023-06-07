<script setup lang="ts">
import AHeader from "./components/TheHeader.vue";
import AFooter from "./components/TheFooter.vue";
import { RouterView } from "vue-router";
import TheFormModal from "@/components/TheFormModal.vue";
</script>

<template>
  <div class="bg-[#F4F6F6]">
    <AHeader class="sticky top-0 mb-4" />

    <RouterView class="p-6" />
    <AFooter class="" />
    <TheFormModal />
  </div>
</template>
