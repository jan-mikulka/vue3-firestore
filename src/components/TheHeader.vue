<script setup lang="ts">
const links = [
  { href: "/akce", label: "Akce" },
  { href: "/projekty", label: "Projekty" },
];
</script>

<template>
  <div class="bg-secondary-light px-4 text-right">
    <RouterLink
      v-for="link in links"
      :to="link.href"
      :key="link.href"
      class="btn"
    >
      {{ link.label }}
    </RouterLink>
  </div>
</template>
