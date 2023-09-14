<script setup lang="ts">
  import { RouterLink } from "vue-router";

  defineProps<{
    name: string;
    href: string;
  }>();
</script>

<template>
  <RouterLink :to="href">
    <p class="link__name">{{ name }}</p>
  </RouterLink>
</template>

<style scoped>
  .link__name {
    padding-right: 2em;
    min-width: 4em;
  }
</style>
