<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <section class="link__section">
    <h3>{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<style scoped>
  .link__section h1,
  .link__section h2,
  .link__section h3 {
    text-transform: uppercase;
  }
</style>
